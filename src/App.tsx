import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import QuickActions from "./components/QuickActions";

export default function App() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <HeroSection />
            <QuickActions />
            <AboutSection />
            <Footer />
        </div>
    );
}