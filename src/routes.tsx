import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/NavBar";

export default function AppRoutes() {
    return (
        <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/aboutus" element = {<AboutSection />} />
            </Routes>
        </main>
        <Footer />
    </BrowserRouter>
    );
}
