import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logoAccess from "@/assets/logo-access.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // CORREÇÃO APLICADA AQUI: O número deve ser 5531984831070
  const whatsappNumber = "5531984831070";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação.`;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "A Clínica" },
    { href: "#servicos", label: "Serviços" },
    { href: "#equipe", label: "Nossa Equipe" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
        : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center">
            <img
              src={logoAccess}
              alt="Access Fisioterapia"
              className={`h-28 md:h-36 w-auto transition-all duration-300`}
              style={{
                filter: isScrolled
                  ? "hue-rotate(-6deg) saturate(0.73) brightness(1.14)" // Adjust to matching Manual Teal
                  : "brightness(0) invert(1)"
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:opacity-70 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? "text-foreground" : "text-background"
                  }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-2 text-sm font-medium transition-colors ${isScrolled ? "text-foreground" : "text-background"
              }`}>
              <Phone className="w-4 h-4" />
              (31) 98483-1070
            </a>
            <Button
              variant={isScrolled ? "default" : "hero"}
              size="lg"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agende sua Consulta</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-background"
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-elegant animate-fade-in">
            <nav className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground text-lg font-medium py-2 border-b border-border transition-colors hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="lg" className="mt-4" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Agende sua Consulta</a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;