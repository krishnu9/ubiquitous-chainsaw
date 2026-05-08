import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

type AnchorProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

const baseStyles =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-ui font-medium transition-all duration-300 ease-out select-none";

const variantStyles: Record<NonNullable<CommonProps["variant"]>, string> = {
  primary:
    "rounded-full bg-earth-gray text-ash-gray hover:text-parchment hover:bg-dark-charcoal",
  ghost:
    "rounded-full text-stone-gray hover:text-parchment border border-transparent hover:border-mist-border",
};

export function PillButton(props: AnchorProps | ButtonProps) {
  const { children, variant = "primary", className = "", ...rest } = props;
  const cls = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if ("href" in rest && rest.href !== undefined) {
    return (
      <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={cls}>
      {children}
    </button>
  );
}
