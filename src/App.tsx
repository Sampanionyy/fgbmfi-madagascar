import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";
import Events from "./pages/Events";
import EventDetails from "./components/EventDetails";
import Story from "./pages/Story";
import AboutUs from "./pages/AboutUs";
import HowItWorks from "./pages/HowItWorks";
import EcoleDeLaVision from "./pages/EcoleDeLaVision";

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
                                <QuickActions />
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

                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
