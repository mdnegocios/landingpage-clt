/** @jsxRuntime classic */
import React from "react";
// Replaced external icon dependency to avoid missing module 'lucide-react'.
// Inline simple SVG icon components to keep this file self-contained.
const MessageCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const Phone: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 3.11 1 1 0 0 1 3 2h4.09a1 1 0 0 1 1 .75c.12.66.36 1.3.7 1.9a1 1 0 0 1-.24 1.09L7.91 8.91a16 16 0 0 0 6 6l1.17-1.17a1 1 0 0 1 1.09-.24c.6.34 1.24.58 1.9.7a1 1 0 0 1 .75 1V22z" />
  </svg>
);
import { Button } from "@/components/ui/button";

interface LPCTAProps {
  title: string;
  subtitle: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  whatsappUrl?: string;
  phoneNumber?: string;
}

const LPCTA = ({
  title,
  subtitle,
  whatsappNumber = "5521923670807",
  whatsappMessage = "Olá! Gostaria de mais informações.",
  whatsappUrl,
  phoneNumber = "(21) 2221-1707",
}: LPCTAProps) => {
  const whatsappHref = whatsappUrl ?? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cta-gradient text-accent-foreground font-bold text-lg px-10 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse-soft border-0 w-full sm:w-auto">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar no WhatsApp
              </Button>
            </a>
            <a href={`tel:${phoneNumber.replace(/\D/g, "")}`}>
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-10 py-6 rounded-xl w-full sm:w-auto">
                <Phone className="mr-2 h-5 w-5" />
                {phoneNumber}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPCTA;
