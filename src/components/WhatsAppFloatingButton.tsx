import { MessageCircle } from "lucide-react";
import { hasWhatsapp, whatsappHref } from "../config/business";
import { useI18n } from "../hooks/useI18n";

/**
 * Floating WhatsApp button. Per the unverified-data rules, it never
 * renders a fake number: while no WhatsApp number is configured it
 * simply doesn't render at all (there is nothing useful to tap).
 */
export default function WhatsAppFloatingButton() {
  const { t } = useI18n();

  if (!hasWhatsapp) return null;

  return (
    <a
      href={whatsappHref() ?? "#"}
      target="_blank"
      rel="noreferrer"
      aria-label={t.whatsappButton.ariaLabel}
      className="fixed bottom-24 end-5 z-[80] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 sm:bottom-6"
    >
      <MessageCircle size={28} />
    </a>
  );
}
