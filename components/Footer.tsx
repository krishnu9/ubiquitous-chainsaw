import { profile } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 tablet:py-12">
      <div className="shell flex flex-col tablet:flex-row gap-2 tablet:items-center tablet:justify-between text-caption text-stone-gray">
        <span>© {year} {profile.name}</span>
        <a
          href={`mailto:${profile.email}`}
          className="hover:text-parchment transition-colors"
        >
          {profile.email}
        </a>
      </div>
    </footer>
  );
}
