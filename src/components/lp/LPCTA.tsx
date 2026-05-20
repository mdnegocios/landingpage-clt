import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LPCTAProps {
  title: string;
  subtitle: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  phoneNumber?: string;
}

const LPCTA = ({
  title,
  subtitle,
  whatsappNumber = "5521222117070",
  whatsappMessage = "Olá! Gostaria de mais informações.",
  phoneNumber = "(21) 2221-1707",
}: LPCTAProps) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">{title}</h2>
          <p className="text-lg text-muted-foreground mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
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
