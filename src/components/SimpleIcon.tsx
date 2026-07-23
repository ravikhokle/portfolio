import type { SimpleIcon as SimpleIconType } from "simple-icons";

type SimpleIconProps = {
  icon: SimpleIconType;
  className?: string;
  size?: number;
};

export default function SimpleIcon({ icon, className = "", size = 20 }: SimpleIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-label={icon.title}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{icon.title}</title>
      <path d={icon.path} />
    </svg>
  );
}
