import ServiceLandingPage from "@/components/seo/ServiceLandingPage";
import { I18nProvider } from "@/i18n/I18nProvider";
import { dictionaries } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import type { ServicePage } from "@/data/servicePages";

export default function ServicePageWithLocale({
  locale,
  page,
}: {
  locale: Locale;
  page: ServicePage;
}) {
  return (
    <I18nProvider dictionary={dictionaries[locale]} locale={locale}>
      <ServiceLandingPage page={page} />
    </I18nProvider>
  );
}
