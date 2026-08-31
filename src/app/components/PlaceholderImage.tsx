import Image from "next/image";
import { ImageIcon } from "lucide-react";

type Props = {
  src?: string | null | undefined;
  alt: string;
  label: string;
  className?: string;
  sizes?: string;
};

export default function PlaceholderImage({
  src,
  alt,
  label,
  className = "",
  sizes = "100vw",
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        quality={90}
        sizes={sizes}
        className={`object-cover ${className}`}
      />
    );
  }

  return (
    <div
      className={`bg-topo flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-container-high text-on-surface-variant/60 ${className}`}
    >
      <ImageIcon className="h-8 w-8" strokeWidth={1.5} />
      <span className="font-mono text-[11px] uppercase tracking-widest">{label}</span>
    </div>
  );
}
