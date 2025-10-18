import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";
import Events from "./pages/Events";
import EventDetails from "./components/EventDetails";

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
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}
