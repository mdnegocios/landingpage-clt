import { Phone, Mail, MapPin } from "lucide-react";

const LPFooter = () => {
  return (
    <footer className="hero-gradient py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground">
          <div>
            <h3 className="text-2xl font-bold mb-4">MD Consultoria & Negócios</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Soluções financeiras com transparência, agilidade e as melhores condições do mercado.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-primary-foreground/70">
              <a href="tel:2122211707" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> (21) 2221-1707
              </a>
              <a href="tel:2122245327" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" /> (21) 2224-5327
              </a>
              <a href="mailto:contato@mdfinanceira.com.br" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" /> contato@mdfinanceira.com.br
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Nossos Serviços</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>Consignado INSS</li>
              <li>Consignado SIAPE</li>
              <li>Consignado Forças Armadas</li>
              <li>Portabilidade de Crédito</li>
              <li>Consignado CLT</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 mt-10 pt-6 text-center text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} MD Consultoria & Negócios. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default LPFooter;
