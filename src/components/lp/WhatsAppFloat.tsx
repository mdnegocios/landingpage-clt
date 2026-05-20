import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  number?: string;
  message?: string;
}

const WhatsAppFloat = ({
  number = "5521222117070",
  message = "Olá! Gostaria de mais informações.",
}: WhatsAppFloatProps) => {
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full cta-gradient flex items-center justify-center shadow-xl hover:scale-110 transition-transform animate-pulse-soft"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-8 w-8 text-accent-foreground" />
    </a>
  );
};

export default WhatsAppFloat;
