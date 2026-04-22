import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// HOME
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Branches from "./components/Branches";
import Contact from "./components/Contact";

// PAGES
import AboutAutismPage from "./components/AboutAutismPage";
import AboutUsPage from "./components/AboutUsPage"; // ✅ correct name
import ServicesPage from "./components/ServicesPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage"; // ✅ ADD THIS

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Stats />
              <Branches />
              <Contact />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/about-autism" element={<AboutAutismPage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* ✅ FORGOT PASSWORD ROUTE */}
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;