import { Star, Quote } from "lucide-react";
const Testimonials = () => {
  const testimonials = [{
    name: "Fernanda",
    text: "Achei um excelente profissional! Muito educado e minucioso na avaliação.",
    professional: "Prof. Warley Oliveira",
    service: "Avaliação para confecção de palmilhas ortopédicas"
  }, {
    name: "Lucilene Almeida",
    text: "Consulta excelente, foi bem demorada, avaliação perfeita, não ficou nenhuma dúvida.",
    professional: "Prof. Warley Oliveira",
    service: "Avaliação para confecção de palmilhas ortopédicas"
  }, {
    name: "Pedro Ladeira",
    text: "Ótima sessão! Profissional competente e atencioso. Gostei muito do tratamento e recomendo.",
    professional: "Prof. Warley Oliveira",
    service: "Consulta Fisioterapia"
  }, {
    name: "Fernanda Faria",
    text: "Atencioso e técnico. Atendimento especializado. Dedicação precisa e individualizada na minha recuperação.",
    professional: "Prof. Warley Oliveira",
    service: "Consulta Fisioterapia"
  }, {
    name: "Ana Maria Tonucci",
    text: "Excelente. Sabe muito bem a técnica e é muito atencioso..",
    professional: "Dr. Felipe França Perdigão",
    service: "Consulta Fisioterapia"
  }, {
    name: "Fernando Assis Fonseca",
    text: "Warley foi muito detalhista na avaliação realizada, explicando os pontos e passando muita confiança no trabalho.",
    professional: "Prof. Warley Oliveira",
    service: "Consulta Fisioterapia"
  }];
  return <section id="depoimentos" className="py-24 bg-background overflow-hidden">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 font-sans">
          Depoimentos
        </p>
        <h2 className="text-4xl font-bold text-foreground mb-6 font-display md:text-6xl">
          O Que Nossos Pacientes Dizem
        </h2>
        <div className="flex items-center justify-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-primary text-primary" />)}
        </div>
        <p className="text-muted-foreground">
          Mais de <span className="font-semibold text-primary">130 avaliações</span> positivas no Doctoralia
        </p>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-6" />
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => <div key={index} className="bg-secondary rounded-2xl p-8 relative group hover:shadow-elegant transition-all duration-300">
          {/* Quote Icon */}
          <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

          {/* Stars */}
          <div className="flex gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
          </div>

          {/* Text */}
          <p className="text-foreground mb-6 leading-relaxed">
            "{testimonial.text}"
          </p>

          {/* Author */}
          <div className="pt-6 border-t border-border">
            <p className="font-semibold text-foreground">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">
              {testimonial.professional}
            </p>
            <p className="text-xs text-primary mt-1">{testimonial.service}</p>
          </div>
        </div>)}
      </div>

      {/* Doctoralia Badge */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-4 bg-secondary rounded-full px-8 py-4">
          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">D</span>
          </div>
          <div className="text-left">
            <p className="font-semibold text-foreground">Access Fisioterapia</p>
            <p className="text-sm text-muted-foreground">
              Verificado no Doctoralia
            </p>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
          </div>
        </div>

        <div className="mt-4">
          <a
            href="https://www.doctoralia.com.br/clinicas/access-fisioterapia?saasonly=true&utm_id=120242&utm_source=widget-facility-120242&utm_medium=facility-big&utm_campaign=&utm_content=#highlight-calendar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-medium underline underline-offset-4 transition-colors"
          >
            Verifique todas as opiniões
          </a>
        </div>
      </div>
    </div>
  </section>;
};
export default Testimonials;