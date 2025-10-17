const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 py-32">
                <div className="max-w-3xl">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
                        BIENVENUE
                        <span className="block text-secondary mt-2">FGBMFI-MADAGASCAR</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                        Une communauté d'hommes d'affaires chrétiens unis dans la foi, le témoignage et le service.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-secondary/50 transform hover:scale-105">
                            Rejoindre un chapitre
                        </button>
                        <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30">
                            En savoir plus
                        </button>
                    </div>
                </div>
            </div>

            {/* Decorative wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-auto">
                    <path fill="#FFFFFF" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroSection;