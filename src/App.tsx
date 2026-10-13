import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFloatingButton from "./components/WhatsAppFloatingButton";
import MobileActionBar from "./components/MobileActionBar";
import Home from "./pages/Home";
import Carte from "./pages/Carte";
import Galerie from "./pages/Galerie";
import Restaurant from "./pages/Restaurant";
import ReservationPage from "./pages/Reservation";
import Contact from "./pages/Contact";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1 pb-16 sm:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carte" element={<Carte />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/confidentialite" element={<Confidentialite />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <MobileActionBar />
    </div>
  );
}

export default App;
