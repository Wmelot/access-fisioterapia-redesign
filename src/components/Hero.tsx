import { Button } from "@/components/ui/button";

const Hero = () => {
  // Número e Link do WhatsApp (Para garantir a consistência com o Header)
  const whatsappNumber = "5531984831070"; 
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.`;

  return (
    <section 
      id="inicio" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagem de Fundo (Hero-background.png) */}
      <div 
        className="absolute inset-0 bg-cover bg-no-repeat transition-all duration-700"
        style={{ 
          backgroundImage: `url('/images/hero-background.png')`,
          // CORREÇÃO APLICADA AQUI: Garante que a imagem se adapte (cover) e centralize (center)
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          // Efeito de escurecimento para dar destaque ao texto
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-sm"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 text-center text-background px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-up">
          Sua Jornada de Bem-Estar Começa Aqui
        </h1>
        <p className="text-lg md:text-xl font-light mb-8 animate-fade-in-up delay-100">
          Recupere seu movimento e qualidade de vida com a expertise e cuidado da Access Fisioterapia.
        </p>
        <Button
          variant="hero"
          size="xl"
          className="shadow-xl hover:shadow-2xl animate-fade-in-up delay-200"
          asChild
        >
          {/* Link para o WhatsApp */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            Agende sua Avaliação por WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;