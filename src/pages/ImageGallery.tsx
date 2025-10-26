import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// types.d.ts ou en haut de ton fichier
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';

interface ImageModule {
    default: string;
}

const importAllImages = (): { url: string; alt: string }[] => {
    const modules: Record<string, ImageModule> = import.meta.glob('../assets/images/*.{jpg,jpeg,png,gif}', { eager: true });

    return Object.keys(modules).map((path, index) => ({
        url: modules[path].default, 
        alt: `Photo n°${index + 1}`
    }));
};


const ImageGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const images = importAllImages(); // récupère automatiquement toutes les images

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    const goToSlide = (index: number) => setCurrentIndex(index);

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => nextSlide(), 4000);
        return () => clearInterval(interval);
    }, [currentIndex, isAutoPlaying]);

    const getVisibleImages = () => {
        const prev = (currentIndex - 1 + images.length) % images.length;
        const next = (currentIndex + 1) % images.length;
        return { prev, current: currentIndex, next };
    };

    const visible = getVisibleImages();

    return (
        <div className="w-full py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Titre */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-3">
                        Nos <span className="text-red-600">Moments</span>
                    </h2>
                    <p className="text-gray-600 text-lg">Découvrez notre communauté en images</p>
                </div>

                {/* Carousel principal */}
                <div
                    className="relative h-[500px] mb-8"
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {/* Images précédente, actuelle et suivante */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-3/4 opacity-40 transition-all duration-500 z-10">
                        <img src={images[visible.prev].url} alt={images[visible.prev].alt} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-full transition-all duration-500 z-20">
                        <img src={images[visible.current].url} alt={images[visible.current].alt} className="w-full h-full object-cover rounded-2xl shadow-2xl" />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                            <p className="text-white text-xl font-semibold">{images[visible.current].alt}</p>
                        </div>
                    </div>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-3/4 opacity-40 transition-all duration-500 z-10">
                        <img src={images[visible.next].url} alt={images[visible.next].alt} className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Boutons */}
                    <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                        <ChevronLeft className="w-6 h-6 text-red-600" />
                    </button>
                    <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
                        <ChevronRight className="w-6 h-6 text-red-600" />
                    </button>
                </div>

                {/* Miniatures */}
                <div className="flex justify-center gap-3 flex-wrap">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`relative overflow-hidden rounded-lg transition-all duration-300 ${index === currentIndex
                                ? 'w-24 h-24 ring-4 ring-red-600 scale-110'
                                : 'w-20 h-20 opacity-60 hover:opacity-100 hover:scale-105'}`}
                            aria-label={`Aller à l'image ${index + 1}`}
                        >
                            <img src={image.url} alt={image.alt} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>

                {/* Compteur */}
                <div className="text-center mt-6">
                    <p className="text-gray-500 font-medium">{currentIndex + 1} / {images.length}</p>
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
