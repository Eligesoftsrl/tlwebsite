import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { HelmetProvider } from 'react-helmet-async';

// Components (sempre caricati)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import CookieConsent from "./components/CookieConsent";

// Pages - Lazy loaded per performance
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TourPage = lazy(() => import("./pages/TourPage"));
const SalaDetailPage = lazy(() => import("./pages/SalaDetailPage"));
const PiattiPage = lazy(() => import("./pages/PiattiPage"));
const BrigataPage = lazy(() => import("./pages/BrigataPage"));
const PasticceriaPage = lazy(() => import("./pages/PasticceriaPage"));
const MusicBandPage = lazy(() => import("./pages/MusicBandPage"));
const QualcosaDiBluPage = lazy(() => import("./pages/QualcosaDiBluPage"));
const DirezionePage = lazy(() => import("./pages/DirezionePage"));
const FrontdeskPage = lazy(() => import("./pages/FrontdeskPage"));
const MatrimoniPage = lazy(() => import("./pages/MatrimoniPage"));
const ComunioniPage = lazy(() => import("./pages/ComunioniPage"));
const FestePage = lazy(() => import("./pages/FestePage"));
const EventiAziendaliPage = lazy(() => import("./pages/EventiAziendaliPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));

// Styles
import "./App.css";

// Loading fallback component
const PageLoader = () => (
  <div className="page-loader">
    <div className="loader-spinner"></div>
  </div>
);

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
        <Suspense fallback={<PageLoader />}>
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
            <Route path="*" element={<HomePage />} />
          </Routes>
        </Suspense>
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
