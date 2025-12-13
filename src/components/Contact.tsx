import { MapPin, Phone, Mail, Clock, Instagram, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4 font-sans">
              Contato
            </p>
            <h2 className="text-4xl font-bold text-foreground mb-6 font-display md:text-6xl">
              Entre em Contato
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-background rounded-2xl p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Endereço
                    </h4>
                    <p className="text-muted-foreground">
                      Academia Bodytech - Unidade Savassi
                      <br />
                      R. Pernambuco, 618 - Sala 11, 3º andar
                      <br />
                      CEP 30130-156 - Belo Horizonte, MG
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Telefone / WhatsApp
                    </h4>
                    <a
                      href="tel:+5531984831070"
                      className="text-primary hover:underline"
                    >
                      (31) 99848-31070
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-muted-foreground">
                      Segunda a Sexta: 7h às 20h
                      <br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Acessibilidade
                    </h4>
                    <p className="text-muted-foreground">
                      Infraestrutura moderna e adaptada, garantindo acessibilidade e conforto para pessoas com mobilidade reduzida.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-4">
                  Siga-nos nas redes sociais
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/accessfisio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://wa.me/5531984831070"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary-dark transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              variant="default"
              size="xl"
              className="w-full bg-primary hover:bg-primary-dark"
              asChild
            >
              <a
                href="https://wa.me/5531984831070"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="w-5 h-5 mr-2" />
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Map */}
          <div className="bg-background rounded-2xl overflow-hidden shadow-soft relative group">
            <a
              href="https://maps.app.goo.gl/374HhAQM3mdpJAnc6?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-10 cursor-pointer"
              aria-label="Abrir localização no Google Maps"
            />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9!2d-43.934364!3d-19.932526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzU3LjEiUyA0M8KwNTYnMDMuNyJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Access Fisioterapia"
              className="transition-opacity group-hover:opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
