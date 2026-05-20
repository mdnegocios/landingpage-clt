import { TrendingDown, Clock, Shield, Users, CheckCircle, Briefcase } from "lucide-react";
import LPHeader from "@/components/lp/LPHeader";
import LPHero from "@/components/lp/LPHero";
import LPBenefits from "@/components/lp/LPBenefits";
import LPSteps from "@/components/lp/LPSteps";
import LPTestimonials from "@/components/lp/LPTestimonials";
import LPCTA from "@/components/lp/LPCTA";
import LPFooter from "@/components/lp/LPFooter";
import WhatsAppFloat from "@/components/lp/WhatsAppFloat";
import heroImage from "@/assets/hero-clt.jpg";

const whatsappUrl = "https://wa.link/4k5vuf";

const ConsignadoCLT = () => {
  return (
    <>
      <LPHeader />
      <LPHero
        badge="Trabalhadores CLT"
        title="Empréstimo Consignado para CLT: Crédito Descomplicado"
        subtitle="Crédito pessoal para trabalhadores com carteira assinada. Sem consulta ao SPC/Serasa, liberação rápida e parcelas descontadas em folha."
        ctaText="Simular Meu Crédito"
        whatsappNumber="5521923672580"
        whatsappMessage="Olá! Sou CLT e gostaria de simular meu empréstimo consignado."
        whatsappUrl={whatsappUrl}
        heroImage={heroImage}
      />
      <LPBenefits
        sectionTitle="Por que o Consignado CLT?"
        sectionSubtitle="Crédito acessível para quem trabalha de carteira assinada"
        benefits={[
          { icon: TrendingDown, title: "Taxas Acessíveis", description: "Juros menores que empréstimos pessoais tradicionais, com condições especiais para CLT." },
          { icon: Briefcase, title: "Sem Consulta SPC/Serasa", description: "Mesmo com restrições no nome, você pode contratar o consignado CLT." },
          { icon: Clock, title: "Liberação Rápida", description: "Processo ágil com crédito liberado em poucos dias após aprovação." },
          { icon: Shield, title: "Segurança", description: "Parcelas descontadas diretamente da folha de pagamento, sem risco de atraso." },
          { icon: CheckCircle, title: "Sem Burocracia", description: "Documentação mínima e processo simplificado de ponta a ponta." },
          { icon: Users, title: "Atendimento Dedicado", description: "Consultores especializados em crédito para trabalhadores CLT." },
        ]}
      />
      <LPSteps
        title="Como Contratar?"
        steps={[
          { number: "1", title: "Entre em Contato", description: "Fale conosco pelo WhatsApp ou telefone." },
          { number: "2", title: "Verifique Convênio", description: "Confirmamos se sua empresa é conveniada." },
          { number: "3", title: "Simulação Gratuita", description: "Receba uma proposta personalizada sem compromisso." },
          { number: "4", title: "Crédito na Conta", description: "Dinheiro liberado rapidamente após aprovação." },
        ]}
      />
      <LPTestimonials
        title="Quem já contratou aprova"
        testimonials={[
          { name: "Lucas T.", role: "Trabalhador CLT", text: "Consegui meu empréstimo mesmo com nome sujo. A MD facilitou tudo para mim!" },
          { name: "Patrícia G.", role: "Funcionária CLT", text: "Processo super rápido. Em 3 dias já tinha o dinheiro na conta." },
          { name: "Ricardo S.", role: "Trabalhador CLT", text: "Ótimas taxas e atendimento muito profissional. Indico para todos os colegas." },
        ]}
      />
      <LPCTA
        title="Trabalha de carteira assinada? Seu crédito está aqui!"
        subtitle="Simule agora mesmo e descubra quanto você pode conseguir com as melhores condições para CLT."
        whatsappNumber="5521923672580"
        whatsappMessage="Olá! Sou CLT e gostaria de simular meu empréstimo consignado."
        whatsappUrl={whatsappUrl}
      />
      <LPFooter />
      <WhatsAppFloat number="5521923672580" message="Olá! Sou CLT e gostaria de simular meu consignado." url={whatsappUrl} />
    </>
  );
};

export default ConsignadoCLT;
