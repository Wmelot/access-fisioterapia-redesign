import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import BookingWidget from "@/components/BookingWidget";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Access Fisioterapia | Clínica de Reabilitação em Belo Horizonte</title>
        <meta
          name="description"
          content="Access Fisioterapia - Clínica especializada em reabilitação, fisioterapia esportiva e ortopédica em Belo Horizonte. Profissionais qualificados e tecnologia de ponta."
        />
        <meta
          name="keywords"
          content="fisioterapia, reabilitação, Belo Horizonte, fisioterapia esportiva, terapia manual, palmilhas ortopédicas"
        />
        <link rel="canonical" href="https://accessfisioterapia.com.br" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <About />
          <Services />
          <Team />
          <Testimonials />
          <BookingWidget />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
