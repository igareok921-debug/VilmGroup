import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border/70 bg-bg-0/80">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center">
          <Image src="/logo-v5.svg" alt="Vilm Group" width={36} height={36} className="h-9 w-9 rounded-md object-cover" />
        </div>
        <p className="text-sm text-muted">
          © 2026 Vilm Group. Toate drepturile rezervate.
        </p>
      </div>
    </footer>
  );
}
