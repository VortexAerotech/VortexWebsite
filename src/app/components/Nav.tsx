import WhatsAppButton from "./WhatsAppButton";

export default function Nav() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border-muted bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-3 md:px-16">
        <a href="#" className="font-mono text-sm font-bold tracking-[0.1em] text-on-surface uppercase">
          Vortex <span className="text-safety-orange">Aerotech</span>
        </a>

        <WhatsAppButton className="!px-6 !py-2" />
      </div>
    </nav>
  );
}
