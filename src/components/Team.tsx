import { Instagram } from "lucide-react";
import teamFabio from "@/assets/team-fabio.jpg";
import teamFelipe from "@/assets/team-felipe.jpg";
import teamWarley from "@/assets/team-warley.jpg";
import teamRayane from "@/assets/team-rayane.png";

const Team = () => {
  const team = [{
    name: "Fábio Cardoso",
    role: "Fisioterapeuta",
    image: teamFabio,
    instagram: "https://www.instagram.com/fabiocardoso8?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    imagePosition: "object-top",
    credentials: ["Fisioterapeuta - Instituto Metodista Izabella Hendrix", "Pós Graduado em Ortopedia Traumatologia e Esportes - FCMMG", "Pós graduado em Terapia Manual - PUC/Minas", "Formação em Síndrome de Dominância Muscular - NEF"]
  }, {
    name: "Felipe Perdigão",
    role: "Fisioterapeuta",
    image: teamFelipe,
    instagram: "https://www.instagram.com/felipeperdigaofisio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    imagePosition: "object-top",
    credentials: ["Fisioterapeuta - PUC/Minas", "Pós graduado em Terapia Manual - PUC/Minas", "Especialista em Fisioterapia Esportiva - COFFITO", "Experiência em ortopedia, traumatologia, esporte e neurologia"]
  }, {
    name: "Warley Oliveira",
    role: "Fisioterapeuta",
    image: teamWarley,
    instagram: "https://www.instagram.com/wmeloto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    imagePosition: "object-top",
    credentials: ["Fisioterapeuta - PUC/Minas", "Mestre em Ciências da Reabilitação - UFMG", "Pós graduado em Terapia Manual - PUC/Minas", "Especialista em Fisioterapia Traumato-ortopédica - COFFITO", "Sócio Proprietário Propulsão Palmilhas Biomecânicas"]
  }, {
    name: "Rayane Vilela",
    role: "Fisioterapeuta Pélvica",
    image: teamRayane,
    instagram: "https://www.instagram.com/rayvilelafisio?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    imagePosition: "object-[center_35%]",
    credentials: ["Fisioterapeuta - PUC/Minas", "Pós-graduação em Fisioterapia Pélvica - Ciclos", "Formação em Esporte e Fitness (Austrália)", "Formação em Hipopressivo - Marcel Caufriez (Espanha)", "Doula pelo Instituto Coletivo Gesta (Rio de Janeiro)"]
  }];

  return <section id="equipe" className="py-24 bg-secondary">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 font-sans">
          Nossa Equipe
        </p>
        <h2 className="text-4xl font-bold text-foreground mb-6 font-display md:text-6xl">
          Profissionais Qualificados
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Nossa equipe é formada por fisioterapeutas com ampla experiência
          clínica e formação acadêmica de excelência.
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {team.map((member, index) => <div key={index} className="group bg-background rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-primary/10">
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0 ${member.imagePosition}`}
            />
          </div>

          {/* Content */}
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-1 font-display">
              {member.name}
            </h3>
            <p className="text-primary font-medium mb-4">{member.role}</p>

            <ul className="space-y-2">
              {member.credentials.map((credential, idx) => <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {credential}
              </li>)}
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6 pt-6 border-t border-border">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  </section>;
};
export default Team;