import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-primary">
                ACCESS
              </span>
              <span className="text-sm font-medium tracking-[0.2em] uppercase text-background/60">
                Fisioterapia
              </span>
            </div>
            <p className="text-background/70 leading-relaxed mb-6 max-w-md">
              Clínica de reabilitação que oferece solução completa no tratamento
              e prevenção das disfunções do aparelho locomotor.
            </p>
            <p className="text-background/70 text-sm">
              R. Pernambuco, 618 - Sala 11, 3º andar
              <br />
              CEP 30130-156 - Belo Horizonte, MG
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Início" },
                { href: "#sobre", label: "A Clínica" },
                { href: "#servicos", label: "Serviços" },
                { href: "#equipe", label: "Nossa Equipe" },
                { href: "#depoimentos", label: "Depoimentos" },
                { href: "#contato", label: "Contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a
                  href="tel:+5531998483170"
                  className="hover:text-primary transition-colors"
                >
                  (31) 99848-31070
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5531998483170"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/accessfisio"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @accessfisio
                </a>
              </li>
              <li>
                <a
                  href="https://www.doctoralia.com.br/clinicas/access-fisioterapia"
                  className="hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Doctoralia
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Access Fisioterapia. Todos os direitos reservados.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> em
            Belo Horizonte
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
