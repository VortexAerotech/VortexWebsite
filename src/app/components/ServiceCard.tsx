import type { LucideIcon } from "lucide-react";
import PlaceholderImage from "./PlaceholderImage";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
  imageLabel: string;
  imageSrc?: string | null;
};

export default function ServiceCard({ icon: Icon, title, description, imageLabel, imageSrc }: Props) {
  return (
    <div className="group flex flex-col overflow-hidden rounded border border-border-muted bg-surface-bright transition-colors hover:border-safety-orange/50">
      <div className="relative h-48 overflow-hidden">
        <PlaceholderImage src={imageSrc} alt={title} label={imageLabel} />
      </div>
      <div className="flex flex-grow flex-col items-center gap-4 p-6 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border-muted bg-surface-container">
          <Icon className="h-5 w-5 text-on-surface-variant" strokeWidth={1.75} />
        </div>
        <h3 className="text-[18px] font-bold text-on-surface uppercase">{title}</h3>
        <p className="text-sm text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}
