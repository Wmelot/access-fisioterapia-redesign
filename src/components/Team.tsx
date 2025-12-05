import { Linkedin, Instagram } from "lucide-react";
import teamFabio from "@/assets/team-fabio.jpg";
import teamFelipe from "@/assets/team-felipe.jpg";
import teamWarley from "@/assets/team-warley.jpg";

const Team = () => {
  const team = [
    {
      name: "Fábio Cardoso",
      role: "Fisioterapeuta",
      image: teamFabio,
      credentials: [
        "Fisioterapeuta - Instituto Metodista Izabella Hendrix",
        "Pós Graduado em Ortopedia Traumatologia e Esportes - FCMMG",
        "Pós graduado em Terapia Manual - PUC/Minas",
        "Formação em Síndrome de Dominância Muscular - NEF",
      ],
    },
    {
      name: "Felipe Perdigão",
      role: "Fisioterapeuta",
      image: teamFelipe,
      credentials: [
        "Fisioterapeuta - PUC/Minas",
        "Pós graduado em Terapia Manual - PUC/Minas",
        "Especialista em Fisioterapia Esportiva - COFFITO",
        "Experiência em ortopedia, traumatologia, esporte e neurologia",
      ],
    },
    {
      name: "Warley Oliveira",
      role: "Fisioterapeuta",
      image: teamWarley,
      credentials: [
        "Fisioterapeuta - PUC/Minas",
        "Mestre em Ciências da Reabilitação - UFMG",
        "Pós graduado em Terapia Manual - PUC/Minas",
        "Especialista em Fisioterapia Traumato-ortopédica - COFFITO",
        "Sócio Proprietário Propulsão Palmilhas Biomecânicas",
      ],
    },
  ];

  return (
    <section id="equipe" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
            Nossa Equipe
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Profissionais Qualificados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossa equipe é formada por fisioterapeutas com ampla experiência
            clínica e formação acadêmica de excelência.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-background rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden bg-primary/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-4">{member.role}</p>

                <ul className="space-y-2">
                  {member.credentials.map((credential, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {credential}
                    </li>
                  ))}
                </ul>

                {/* Social */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                  <a
                    href="https://instagram.com/accessfisio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.doctoralia.com.br/clinicas/access-fisioterapia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
