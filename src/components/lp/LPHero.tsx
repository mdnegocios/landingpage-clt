import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LPHeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  heroImage: string;
  badge?: string;
}

const LPHero = ({
  title,
  subtitle,
  ctaText = "Simular Agora",
  whatsappNumber = "5521222117070",
  whatsappMessage = "Olá! Gostaria de simular meu empréstimo consignado.",
  heroImage,
  badge,
}: LPHeroProps) => {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 hero-overlay" />
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          {badge && (
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold bg-accent text-accent-foreground animate-fade-up">
              {badge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight animate-fade-up text-balance">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-up-delay">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="cta-gradient text-accent-foreground font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all animate-pulse-soft border-0">
                <MessageCircle className="mr-2 h-5 w-5" />
                {ctaText}
              </Button>
            </a>
            <a href="#simular">
              <Button size="lg" variant="outline" className="border-2 border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 font-semibold text-lg px-8 py-6 rounded-xl">
                Saiba Mais
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPHero;
