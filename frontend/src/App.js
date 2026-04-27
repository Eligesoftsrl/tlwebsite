import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';

// Components (sempre caricati)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieConsent from "./components/CookieConsent";

// Pages - Import diretto per compatibilità con react-snap pre-rendering
// Nota: lazy() impediva a react-snap di catturare il contenuto HTML completo
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import TourPage from "./pages/TourPage";
import SalaDetailPage from "./pages/SalaDetailPage";
import PiattiPage from "./pages/PiattiPage";
import BrigataPage from "./pages/BrigataPage";
import PasticceriaPage from "./pages/PasticceriaPage";
import MusicBandPage from "./pages/MusicBandPage";
import QualcosaDiBluPage from "./pages/QualcosaDiBluPage";
import DirezionePage from "./pages/DirezionePage";
import FrontdeskPage from "./pages/FrontdeskPage";
import MatrimoniPage from "./pages/MatrimoniPage";
import ComunioniPage from "./pages/ComunioniPage";
import FestePage from "./pages/FestePage";
import EventiAziendaliPage from "./pages/EventiAziendaliPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";

// Styles
import "./App.css";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contatti" element={<ContactPage />} />
            <Route path="/tour" element={<TourPage />} />
            <Route path="/piatti" element={<PiattiPage />} />
            <Route path="/brigata" element={<BrigataPage />} />
            <Route path="/pasticceria" element={<PasticceriaPage />} />
            <Route path="/music-band" element={<MusicBandPage />} />
            <Route path="/qualcosa-di-blu" element={<QualcosaDiBluPage />} />
            <Route path="/direzione" element={<DirezionePage />} />
            <Route path="/frontdesk" element={<FrontdeskPage />} />
            <Route path="/matrimoni-autore-salerno" element={<MatrimoniPage />} />
            <Route path="/comunioni-battesimi-campania" element={<ComunioniPage />} />
            <Route path="/feste-laurea-salerno" element={<FestePage />} />
            <Route path="/eventi-aziendali-salerno" element={<EventiAziendaliPage />} />
            <Route path="/sala/:slug" element={<SalaDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        <Footer />
        <WhatsAppButton />
        <CookieConsent />
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
