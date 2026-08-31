import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "27789158120";
const DEFAULT_MESSAGE = "Ek wil graag 'n kwotasie kry vir spuitwerk";

export default function WhatsAppButton({ className = "" }: { className?: string }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded bg-safety-orange px-8 py-4 font-mono text-sm font-bold tracking-[0.08em] text-field-white uppercase transition-opacity hover:opacity-90 ${className}`}
    >
      <MessageCircle className="h-5 w-5" fill="currentColor" strokeWidth={0} />
      WhatsApp Ons
    </a>
  );
}
