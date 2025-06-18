import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/NavBar";
import WindowTinting from "./FilmService/WindowTinting"
import VehicleWraps from "./FilmService/VehicleWraps"
import PaintProtectionFilm from "./FilmService/PaintProtectionFilm"
import EngineCleaning from "./Exterior/EngineCleaning";
import HeadlightRestoration from "./Exterior/HeadlightRestoration";
import PaintCorrection from "./Exterior/PaintCorrection";
import PaintOversprayRemoval from "./Exterior/PaintOversprayRemoval";
import PremiumWash from "./Exterior/PremiumWash";
import WashAndWax from "./Exterior/WashAndWax";
import CeramicCoating from "./Exterior/CeramicCoating";
import FullInteriorCleaning from "./Interior/FullInteriorCleaning"
import MiniInteriorDetail from "./Interior/MiniInteriorDetail";
import SmokeOdorRemoval from "./Interior/SmokeOdorRemoval";
import RestorativeInteriorCleaning from "./Interior/RestorativeInteriorCleaning";
import EngineCleaningGallery from "./Gallery/EngineCleaningGallery";
import WashAndWaxGallery from "./Gallery/WashAndWaxGallery";
import FullInteriorCleaningGallery from "./Gallery/FullInteriorCleaningGallery";
import PaintCorrectionGallery from "./Gallery/PaintCorrectionGallery";
import BeltsvilleDetailing from "./Service Areas/BeltsvilleDetailing";
import BethesdaDetailing from "./Service Areas/BethesdaDetailing";
import ClarksburgDetailing from "./Service Areas/ClarksburgDetailing";
import CollegeParkDetailing from "./Service Areas/CollegeParkDetailing";
import ColumbiaDetailing from "./Service Areas/ColumbiaDetailing";
import DamascusDetailing from "./Service Areas/DamascusDetailing";
import GaithersburgDetailing from "./Service Areas/GaithersburgDetailing";
import LaurelDetailing from "./Service Areas/LaurelDetailing";
import OlneyDetailing from "./Service Areas/OlneyDetailing";
import PoolesvilleDetailing from "./Service Areas/PoolesvilleDetailing";
import PotomacDetailing from "./Service Areas/PotomacDetailing";
import RockvilleDetailing from "./Service Areas/RockvilleDetailing";
import SilverSpringDetailing from "./Service Areas/SilverSpringDetailing";
import WellnessDetailing from "./Service Areas/WellnessDetailing";
import DetailingFAQs from "./AboutUs/DetailingFAQs";
import FAQEngineCleaning from "./AboutUs/FAQEngineCleaning";
import FAQFullInteriorCleaning from "./AboutUs/FAQFullInteriorCleaning";
import FAQSmokeOdorRemoval from "./AboutUs/FAQSmokeOdorRemoval";
import OurTeam from "./AboutUs/OurTeam";
import Reviews from "./AboutUs/Reviews";
import DetailingMethodology from "./AboutUs/DetailingMethodology";
import AppointmentDepositPolicy from "./AboutUs/AppointmentDepositPolicy";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navbar />
            <main className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/aboutus" element={<AboutSection />} />
                    <Route path="/windowtinting" element={<WindowTinting />} />
                    <Route path="/paintprotectionfilm" element={<PaintProtectionFilm />} />
                    <Route path="/vehiclewraps" element={<VehicleWraps />} />
                    <Route path="/paintcorrection" element={<PaintCorrection />} />
                    <Route path="/ceramiccoating" element={<CeramicCoating />} />
                    <Route path="/paintoversprayremoval" element={<PaintOversprayRemoval />} />
                    <Route path="/washandwax" element={<WashAndWax />} />
                    <Route path="/enginecleaning" element={<EngineCleaning />} />
                    <Route path="/headlightrestoration" element={<HeadlightRestoration />} />
                    <Route path="/premiumwash" element={<PremiumWash />} />
                    <Route path="/fullinteriorcleaning" element={<FullInteriorCleaning />} />
                    <Route path="/miniinteriordetail" element={<MiniInteriorDetail />} />
                    <Route path="/smokeodorremoval" element={<SmokeOdorRemoval />} />
                    <Route path="/restorativeinteriorcleaning" element={<RestorativeInteriorCleaning />} />
                    <Route path="/enginecleaninggallery" element={<EngineCleaningGallery />} />
                    <Route path="/washandwaxgallery" element={<WashAndWaxGallery/>} />
                    <Route path="/fullinteriorcleaninggallery" element={<FullInteriorCleaningGallery/>} />
                    <Route path="/paintcorrectiongallery" element={<PaintCorrectionGallery/>} />
                    <Route path="/wellnessdetailingshop" element={<WellnessDetailing />} />
                    <Route path="/poolesvillemdmobiledetailing" element={<PoolesvilleDetailing />} />
                    <Route path="/columbiamobiledetailing" element={<ColumbiaDetailing/>} />
                    <Route path="/collegeparkmobiledetailing" element={<CollegeParkDetailing />} />                    
                    <Route path="/damascusmdmobiledetailing" element={<DamascusDetailing/>} />
                    <Route path="/laurelmdmobiledetailing" element={<LaurelDetailing />} />
                    <Route path="/beltsvillemdmobiledetailing" element={<BeltsvilleDetailing />} />
                    <Route path="/silverspringmdmobiledetailing" element={<SilverSpringDetailing/>} />
                    <Route path="/bethesdamdmobiledetailing" element={<BethesdaDetailing />} />                    
                    <Route path="/potomacmdmobiledetailing" element={<PotomacDetailing/>} />
                    <Route path="/clarksburgmobiledetailing" element={<ClarksburgDetailing />} />
                    <Route path="/gaithersburgmobiledetailing" element={<GaithersburgDetailing/>} />
                    <Route path="/rockvillemdmobiledetailing" element={<RockvilleDetailing />} />
                    <Route path="/olneymdmobiledetailing" element={<OlneyDetailing/>} />     
                    <Route path="/detailingfaqs" element={<DetailingFAQs/>} />   
                    <Route path="/faqsmokeodorremoval" element={<FAQSmokeOdorRemoval/>} />  
                    <Route path="/faqfullinteriorcleaning" element={<FAQFullInteriorCleaning/>} />    
                    <Route path="/faqenginecleaning" element={<FAQEngineCleaning/>} /> 
                    <Route path="/ourteam" element={<OurTeam/>} />  
                    <Route path="/reviews" element={<Reviews/>} />       
                    <Route path="/detailingmethodology" element={<DetailingMethodology/>} /> 
                    <Route path="/appointmentdepositpolicy" element={<AppointmentDepositPolicy/>} /> 
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    );
}
