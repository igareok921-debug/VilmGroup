type GoogleReviewer = {
  displayName?: string;
  profilePhotoUrl?: string;
  isAnonymous?: boolean;
};

type GoogleBusinessReview = {
  reviewId?: string;
  reviewer?: GoogleReviewer;
  starRating?: string;
  comment?: string;
  createTime?: string;
  updateTime?: string;
};

type GoogleReviewsPage = {
  reviews?: GoogleBusinessReview[];
  averageRating?: number;
  totalReviewCount?: number;
  nextPageToken?: string;
};

export type PublicGoogleReview = {
  id: string;
  author: string;
  rating: number;
  comment: string;
  createdAt: string;
};

export type GoogleReviewsPayload = {
  reviews: PublicGoogleReview[];
  averageRating: number;
  totalReviewCount: number;
  sourceUrl: string;
};

const ratingValues: Record<string, number> = {
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
};

function getConfig() {
  const config = {
    clientId: process.env.GOOGLE_BUSINESS_CLIENT_ID,
    clientSecret: process.env.GOOGLE_BUSINESS_CLIENT_SECRET,
    refreshToken: process.env.GOOGLE_BUSINESS_REFRESH_TOKEN,
    accountId: process.env.GOOGLE_BUSINESS_ACCOUNT_ID,
    locationId: process.env.GOOGLE_BUSINESS_LOCATION_ID,
    profileUrl: process.env.GOOGLE_BUSINESS_PROFILE_URL,
  };

  if (Object.values(config).some((value) => !value)) {
    throw new Error("Google Business Profile reviews are not configured.");
  }

  return config as Record<keyof typeof config, string>;
}

async function getAccessToken(config: ReturnType<typeof getConfig>) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: config.clientId,
      client_secret: config.clientSecret,
      refresh_token: config.refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Google OAuth failed with status ${response.status}.`);
  }

  const data = (await response.json()) as { access_token?: string };
  if (!data.access_token) {
    throw new Error("Google OAuth did not return an access token.");
  }

  return data.access_token;
}

export async function getAllGoogleBusinessReviews(): Promise<GoogleReviewsPayload> {
  const config = getConfig();
  const accessToken = await getAccessToken(config);
  const reviews: GoogleBusinessReview[] = [];
  let pageToken = "";
  let averageRating = 0;
  let totalReviewCount = 0;

  for (let page = 0; page < 100; page += 1) {
    const params = new URLSearchParams({
      pageSize: "50",
      orderBy: "updateTime desc",
    });
    if (pageToken) params.set("pageToken", pageToken);

    const endpoint =
      `https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(config.accountId)}` +
      `/locations/${encodeURIComponent(config.locationId)}/reviews?${params.toString()}`;
    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${accessToken}` },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Business Profile API failed with status ${response.status}.`);
    }

    const data = (await response.json()) as GoogleReviewsPage;
    reviews.push(...(data.reviews ?? []));
    averageRating = data.averageRating ?? averageRating;
    totalReviewCount = data.totalReviewCount ?? totalReviewCount;
    pageToken = data.nextPageToken ?? "";

    if (!pageToken) break;
  }

  return {
    reviews: reviews.map((review, index) => ({
      id: review.reviewId ?? `google-review-${index}`,
      author:
        review.reviewer?.isAnonymous || !review.reviewer?.displayName
          ? "Google user"
          : review.reviewer.displayName,
      rating: ratingValues[review.starRating ?? ""] ?? 0,
      comment: review.comment?.trim() ?? "",
      createdAt: review.createTime ?? review.updateTime ?? "",
    })),
    averageRating,
    totalReviewCount,
    sourceUrl: config.profileUrl,
  };
}
