import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { QuienesSomosPage } from "./pages/QuienesSomosPage";
import { TarifaUnicaPage } from "./pages/TarifaUnicaPage";
import { SeguimientoPage } from "./pages/SeguimientoPage";
import { BlogPage } from "./pages/BlogPage";
import { ContactoPage } from "./pages/ContactoPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'quienes-somos':
        return <QuienesSomosPage />;
      case 'tarifa-unica':
        return <TarifaUnicaPage />;
      case 'seguimiento':
        return <SeguimientoPage />;
      case 'blog':
        return <BlogPage />;
      case 'contacto':
        return <ContactoPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {renderCurrentPage()}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}