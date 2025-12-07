// ...existing code...
import React from "react";
import heroBackground from "@/assets/hero-background.png";

export default function Hero(): JSX.Element {
  return (
    <section className="relative overflow-hidden">
      {/* Imagem: mobile mostra completa (object-contain); em md+ mantém cobertura (object-cover) */}
      <img
        src={heroBackground}
        alt="Access Fisioterapia"
        className="w-full h-auto md:h-[60vh] object-contain md:object-cover object-top"
      />

      {/* Conteúdo do hero (texto, botões) posicionado sobre a imagem */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none md:pointer-events-auto">
        {/* ...existing code... */}
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">Access Fisioterapia</h1>
          <p className="mt-3 text-sm md:text-lg max-w-2xl mx-auto">
            {/* Substitua pelo conteúdo real do seu hero */}
          </p>
        </div>
        {/* ...existing code... */}
      </div>
    </section>
  );
}
// ...existing code...