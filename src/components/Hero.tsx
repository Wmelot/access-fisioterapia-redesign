import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-background rounded-full blur-3xl" />
      </div>

      {/* Large Typography Background */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="font-display text-[15vw] md:text-[20vw] font-bold text-background/10 tracking-tighter select-none">
          ACCESS
        </h1>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-background/80 text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 animate-fade-up">
            Fisioterapia de Excelência
          </p>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-background leading-tight mb-6 animate-fade-up delay-100">
            Sua Recuperação é Nossa
            <span className="block">Prioridade</span>
          </h1>

          <p className="text-background/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Somos uma clínica de reabilitação que oferece solução completa no
            tratamento e prevenção das disfunções do aparelho locomotor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#agendar">Agende sua Consulta</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#sobre">Conheça a Access</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <a
          href="#sobre"
          className="flex flex-col items-center gap-2 text-background/70 hover:text-background transition-colors"
        >
          <span className="text-xs font-medium tracking-wider uppercase">
            Saiba mais
          </span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
