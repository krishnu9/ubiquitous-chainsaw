type Props = {
  children: React.ReactNode;
  className?: string;
};

export function FrostedTag({ children, className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center rounded-md bg-frosted-tag px-3 py-1 text-ui text-parchment/90 ${className}`}
      style={{ fontSize: "14px", letterSpacing: "0.02em" }}
    >
      {children}
    </span>
  );
}
