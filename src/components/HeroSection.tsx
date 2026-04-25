import { Button } from "@/components/ui/button";
import logoAccess from "@/assets/logo-access-final-v2.png";
import heroAttendance from "@/assets/photos/hero-attendance.webp";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  // Link direto para o agendamento no sistema Axiom
  const bookingLink = "https://agenda.accessfisio.com.br/book/access-fisioterapia";

  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex items-center justify-center py-20 overflow-hidden"
    >
      {/* Background photo */}
      <img
        src={heroAttendance}
        alt="Fisioterapeuta acompanhando paciente em analise da marcha na esteira"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      {/* Teal overlay to preserve brand identity and ensure text contrast */}
      <div className="absolute inset-0 bg-[#59cbbb]/85"></div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 text-center text-background px-4 max-w-5xl flex flex-col items-center">

        {/* Tagline - Agora ACIMA da logo */}
        <p className="text-xl md:text-2xl font-medium tracking-[0.2em] uppercase mb-1 opacity-90">
          Fisioterapia de excelência baseada na melhor evidência
        </p>

        {/* Logo */}
        <img
          src={logoAccess}
          alt="Access Fisioterapia"
          className="w-full h-auto max-h-[50vh] md:max-h-[65vh] mb-2 object-contain"
        />

        {/* Botoes - Agora ABAIXO da logo */}
        <div className="flex flex-col sm:flex-row gap-6">
          <Button
            variant="hero"
            size="xl"
            className="shadow-xl hover:shadow-2xl min-w-[240px]"
            asChild
          >
            <a href={bookingLink} target="_blank" rel="noopener noreferrer">
              Agende sua Consulta
            </a>
          </Button>

          <Button
            variant="outline"
            size="xl"
            className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-primary shadow-xl hover:shadow-2xl min-w-[240px]"
            asChild
          >
            <a href="#sobre">
              Conheça a Access
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
        <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] uppercase text-background/80">
          Saiba Mais
        </span>
        <ChevronDown className="w-6 h-6 text-background/80" />
      </div>
    </section>
  );
};

export default HeroSection;