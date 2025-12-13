import { useEffect } from "react";
import { Calendar, Clock, MapPin, Wind } from "lucide-react";

const BookingWidget = () => {
  useEffect(() => {
    // Load Doctoralia widget script
    const script = document.createElement("script");
    script.src = "https://www.doctoralia.com.br/platform/js/widget.js";
    script.id = "zl-facility-widget";
    script.async = true;

    if (!document.getElementById("zl-facility-widget")) {
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="agendar" className="py-24 bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-background rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <p className="font-medium tracking-[0.2em] uppercase text-sm mb-4 opacity-80">
              Agende sua Consulta
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Comece Sua Recuperação Hoje
            </h2>
            <p className="text-lg opacity-90 mb-10 leading-relaxed">
              Agende sua avaliação com nossa equipe de especialistas e inicie seu
              tratamento personalizado.
            </p>

            {/* Features */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Agendamento Online</h4>
                  <p className="text-sm opacity-80">
                    Escolha o melhor horário diretamente pelo Doctoralia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Horários Flexíveis</h4>
                  <p className="text-sm opacity-80">
                    Horários de atendimento estendidos e adaptáveis, garantindo que sua saúde encontre espaço na sua rotina.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Localização Privilegiada</h4>
                  <p className="text-sm opacity-80">
                    Academia Bodytech - Unidade Savassi
                    <br />
                    R. Pernambuco, 618 - Sala 11, 3º andar - Belo Horizonte
                    <br />
                    Estacionamento gratuito para pacientes em atendimento
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-background/20 flex items-center justify-center flex-shrink-0">
                  <Wind className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ambiente Climatizado</h4>
                  <p className="text-sm opacity-80">
                    Ambiente climatizado para o seu conforto durante todo o tratamento.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctoralia Widget */}
          <div className="bg-background rounded-3xl p-8 shadow-elegant">
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                Agende pelo Doctoralia
              </h3>
              <p className="text-muted-foreground text-sm">
                Clique abaixo para ver horários disponíveis
              </p>
            </div>

            {/* Doctoralia Widget Embed */}
            <div className="flex justify-center">
              <a
                href="https://www.doctoralia.com.br/clinicas/access-fisioterapia"
                data-zl-widget-facility="access-fisioterapia"
                rel="nofollow"
                data-placement="inline"
                data-zlw-type="facility-calendar-listing-with-saas-only"
              >
                Access Fisioterapia
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Ou ligue para{" "}
                <a
                  href="tel:+5531984831070"
                  className="text-primary font-semibold hover:underline"
                >
                  (31) 98483-1070
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
