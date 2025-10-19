import { BookOpen, Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
    const features = [
        { icon: <Target className="w-6 h-6" />, title: "Notre Mission", desc: "Témoigner de la foi chrétienne dans le monde des affaires" },
        { icon: <Heart className="w-6 h-6" />, title: "Nos Valeurs", desc: "Intégrité, communion et service" },
        { icon: <Users className="w-6 h-6" />, title: "Notre Communauté", desc: "Des hommes engagés dans leur foi" },
        { icon: <BookOpen className="w-6 h-6" />, title: "Nos Réunions", desc: "Rassemblements mensuels de partage" }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-surface/30">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block bg-secondary/10 px-4 py-2 rounded-full mb-6">
                            <span className="text-primary font-semibold">À propos de nous</span>
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            Une communauté de <span className="text-primary">foi</span> et d'<span className="text-accent">action</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Le Full Gospel Business Men's Fellowship International (FGBMFI) est une communauté mondiale d'hommes d'affaires chrétiens dédiés au partage de leur foi et au témoignage de l'Évangile dans leur sphère professionnelle.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center text-white">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                                        <p className="text-sm text-gray-600">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white rounded-3xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                            <div className="h-80 bg-gradient-to-br from-surface to-surface/50 rounded-2xl overflow-hidden">
                                <img 
                                    src="/images/photo2.jpeg" 
                                    alt="About FGBMFI" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="mt-6 text-center">
                                <div className="text-4xl font-bold text-primary">50+</div>
                                <div className="text-gray-600 font-medium">Années d'histoire</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;