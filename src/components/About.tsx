import { Target, Eye, Heart, Award, Users, Sparkles } from "lucide-react";
import clinicInterior from "@/assets/clinic-interior.jpg";

const About = () => {
  const values = [
    { icon: Heart, label: "Ética" },
    { icon: Award, label: "Prática baseada em evidências" },
    { icon: Users, label: "Qualidade no atendimento" },
    { icon: Target, label: "Transparência nos resultados" },
    { icon: Sparkles, label: "Inovação" },
    { icon: Eye, label: "Resolutividade" },
  ];

  return (
    <section id="sobre" className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Sobre Nós
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conheça a Access Fisioterapia
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 shadow-elegant">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Quem Somos
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Somos uma clínica de reabilitação que oferece solução completa no
                tratamento e na prevenção das disfunções do aparelho locomotor
                envolvendo consulta, diagnóstico, intervenção, reabilitação e
                condicionamento físico. Nossos profissionais são altamente
                qualificados e com ampla experiência clínica. Possuímos
                localização privilegiada e tecnologia de ponta para o atendimento
                dos nossos clientes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-primary rounded-2xl p-6 text-primary-foreground">
                <Target className="w-10 h-10 mb-4 opacity-80" />
                <h4 className="font-display text-xl font-semibold mb-3">
                  Missão
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  Reabilitar nossos pacientes com uma equipe altamente capacitada,
                  utilizando das melhores evidências científicas disponíveis e de
                  tecnologia avançada, considerando a individualidade de cada
                  paciente.
                </p>
              </div>

              <div className="bg-foreground rounded-2xl p-6 text-background">
                <Eye className="w-10 h-10 mb-4 opacity-80" />
                <h4 className="font-display text-xl font-semibold mb-3">
                  Visão
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  Ser referência nacional em reabilitação e prevenção das
                  disfunções musculoesqueléticas.
                </p>
              </div>
            </div>
          </div>

          {/* Image/Stats Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-elegant bg-primary/10">
              <img
                src={clinicInterior}
                alt="Equipe Access Fisioterapia - Felipe, Warley e Fábio"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 bg-background rounded-2xl p-6 shadow-elegant">
              <p className="text-4xl font-display font-bold text-primary">130+</p>
              <p className="text-sm text-muted-foreground">Avaliações 5 estrelas</p>
            </div>

            <div className="absolute -top-8 -right-8 bg-primary rounded-2xl p-6 shadow-teal">
              <p className="text-4xl font-display font-bold text-primary-foreground">17+</p>
              <p className="text-sm text-primary-foreground/80">Anos de experiência</p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-20">
          <h3 className="font-display text-2xl font-semibold text-center text-foreground mb-10">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 text-center shadow-soft hover:shadow-elegant transition-shadow duration-300 group"
              >
                <value.icon className="w-8 h-8 mx-auto mb-3 text-primary group-hover:scale-110 transition-transform duration-300" />
                <p className="text-sm font-medium text-foreground">{value.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
