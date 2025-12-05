import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-hero">
      <div className="text-center px-4">
        <h1 className="font-display text-9xl font-bold text-background/20 mb-4">404</h1>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-background mb-4">
          Página não encontrada
        </h2>
        <p className="text-background/80 text-lg mb-8 max-w-md mx-auto">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </a>
          </Button>
          <Button variant="heroOutline" size="lg" onClick={() => window.history.back()}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
