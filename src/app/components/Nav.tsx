import Image from "next/image";
import WhatsAppButton from "./WhatsAppButton";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border-muted bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-16">
        <a href="#" className="flex items-center">
          <Image
            src="/vortex-aerotech-logo.svg"
            alt="Vortex Aerotech"
            width={195}
            height={80}
            className="h-11 w-auto md:h-12"
            priority
          />
        </a>

        <WhatsAppButton className="!px-6 !py-2" />
      </div>
    </nav>
  );
}
