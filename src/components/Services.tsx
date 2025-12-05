import { Activity, Footprints, Stethoscope, Dumbbell, Brain, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consulta Fisioterapia",
      description:
        "Avaliação completa para diagnóstico preciso e planejamento do tratamento personalizado.",
      highlight: false,
    },
    {
      icon: Activity,
      title: "Sessão de Fisioterapia",
      description:
        "Tratamentos individualizados utilizando técnicas baseadas em evidências científicas.",
      price: "A partir de R$ 180",
      highlight: true,
    },
    {
      icon: Footprints,
      title: "Palmilhas Ortopédicas",
      description:
        "Avaliação biomecânica e confecção de palmilhas personalizadas para correção postural.",
      price: "R$ 300",
      highlight: false,
    },
    {
      icon: Dumbbell,
      title: "Medicina Esportiva",
      description:
        "Atendimento especializado para atletas e praticantes de atividades físicas.",
      highlight: false,
    },
    {
      icon: Brain,
      title: "Terapia Manual",
      description:
        "Técnicas manuais avançadas para alívio da dor e recuperação da mobilidade.",
      highlight: false,
    },
    {
      icon: HeartPulse,
      title: "Reabilitação",
      description:
        "Programas completos de reabilitação pós-cirúrgica e pós-trauma.",
      highlight: false,
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Nossos Serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Tratamentos Especializados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma ampla gama de serviços para atender às suas
            necessidades de reabilitação e bem-estar.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${
                service.highlight
                  ? "bg-primary text-primary-foreground shadow-teal"
                  : "bg-secondary hover:shadow-elegant"
              }`}
            >
              <service.icon
                className={`w-12 h-12 mb-6 ${
                  service.highlight
                    ? "text-primary-foreground/80"
                    : "text-primary"
                }`}
              />

              <h3
                className={`font-display text-xl font-semibold mb-3 ${
                  service.highlight ? "text-primary-foreground" : "text-foreground"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm leading-relaxed mb-4 ${
                  service.highlight
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              {service.price && (
                <p
                  className={`text-lg font-semibold ${
                    service.highlight
                      ? "text-primary-foreground"
                      : "text-primary"
                  }`}
                >
                  {service.price}
                </p>
              )}

              {/* Decorative Element */}
              <div
                className={`absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 ${
                  service.highlight ? "bg-background" : "bg-primary"
                }`}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="default" size="xl" asChild>
            <a href="#agendar">Agende sua Avaliação</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
