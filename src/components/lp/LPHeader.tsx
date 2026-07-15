import { Phone } from "lucide-react";
import logoMd from "@/assets/logo-md-white.avif";

const LPHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="https://mdnegocios.com.br" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
          <img src={logoMd} alt="MD Consultoria & Negócios" className="h-10 w-auto" />
        </a>
        <a
          href="tel:2122211707"
          className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
        >
          <Phone className="h-4 w-4" />
          <span className="hidden sm:block">(21) 2221-1707</span>
        </a>
      </div>
    </header>
  );
};

export default LPHeader;
