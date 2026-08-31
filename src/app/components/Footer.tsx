export default function Footer() {
  return (
    <footer className="w-full border-t border-border-muted bg-surface-container-lowest py-10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-16">
        <p className="text-center italic text-on-surface-variant/50 md:text-left">
          Spyt kom altyd te laat.
        </p>
        <a
          href="https://wa.me/27789158120"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm tracking-[0.08em] text-on-surface-variant uppercase transition-colors hover:text-safety-orange"
        >
          +27 78 915 8120
        </a>
        <p className="text-sm text-safety-orange/80">
          © {new Date().getFullYear()} Vortex Aerotech.
        </p>
      </div>
    </footer>
  );
}
