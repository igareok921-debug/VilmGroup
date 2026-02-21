import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-bg-0/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex h-9 w-24 items-center">
          <Image src="/LogoV5.svg" alt="Vilm Group" width={180} height={68} className="h-9 w-full object-contain" />
        </div>
        <p className="text-sm text-muted">
          © 2026 Vilm Group. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
