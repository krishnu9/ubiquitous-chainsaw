type Props = {
  children: React.ReactNode;
  tone?: "stone" | "purple" | "ash";
  as?: "span" | "div" | "p";
  className?: string;
};

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  stone: "text-stone-gray",
  purple: "text-muted-purple",
  ash: "text-ash-gray",
};

export function SectionLabel({
  children,
  tone = "stone",
  as: Tag = "div",
  className = "",
}: Props) {
  return (
    <Tag className={`text-label ${toneClass[tone]} ${className}`}>{children}</Tag>
  );
}
