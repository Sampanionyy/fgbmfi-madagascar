import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Events from "./pages/Events";
import EventDetails from "./components/EventDetails";
import Story from "./pages/Story";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import EcoleDeLaVision from "./pages/EcoleDeLaVision";
import FgbmfiLadies from "./pages/FgbmfiLadies";
import JoinUs from "./pages/JoinUs";
import ImageGallery from "./pages/ImageGallery";

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-white">
                <Navbar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <HeroSection />
                                <ImageGallery />
                                <AboutSection />
                            </>
                        }
                    />
                    <Route path="/events" element={<Events />} />
                    <Route path="/events/:id" element={<EventDetails />} />
                    <Route path="/story" element={<Story />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/how-it-works" element={<HowItWorks />} />
                    <Route path="/ecole-de-la-vision" element={<EcoleDeLaVision />} />
                    <Route path="/fgbmfi-ladies" element={<FgbmfiLadies />} />
                    <Route path="/join-us" element={<JoinUs />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
