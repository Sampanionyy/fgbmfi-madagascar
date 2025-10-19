import { Users, Heart, Star, Award } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

const FgbmfiLadies = () => {
    const sections = [
        {
            icon: <Star className="w-8 h-8 text-[#FFD700]" />,
            title: "Témoignages de femmes d'impact",
            description: "Découvrez les histoires inspirantes de femmes qui transforment leurs entreprises et communautés."
        },
        {
            icon: <Award className="w-8 h-8 text-[#C00000]" />,
            title: "Conseils en leadership & entrepreneuriat",
            description: "Recevez des astuces pratiques pour diriger efficacement et développer votre entreprise."
        },
        {
            icon: <Users className="w-8 h-8 text-[#007A3D]" />,
            title: "Opportunités de réseautage",
            description: "Rencontrez d'autres femmes d'affaires et entrepreneures partageant la même vision."
        },
        {
            icon: <Heart className="w-8 h-8 text-[#C00000]" />,
            title: "Événements et ateliers FGBMFI LADIES",
            description: "Participez à nos ateliers et événements pour grandir spirituellement et professionnellement."
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFFFFF]">
            <ReusableHero
                title="FGBMFI LADIES MADAGASCAR"
                badge="Ladies"
                icon="info"
                subtitle="Croissance pour les femmes d'affaires"
                description="Encourager et équiper les femmes dans leur appel entrepreneurial tout en connaissant Jésus-Christ"
                centered
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 relative">
                <div className="absolute -top-10 sm:-top-20 -left-10 sm:-left-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#C00000] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-10 sm:-bottom-20 -right-10 sm:-right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#FFD700] rounded-full opacity-20 blur-3xl"></div>

                <div className="relative bg-white rounded-2xl sm:rounded-3xl md:rounded-[3rem] shadow-2xl p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20 border border-[#E5E5E5]">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
                        <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#C00000] to-[#FFD700] rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
                            <Users className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-slate-900 mb-2 sm:mb-3 md:mb-4 leading-tight">
                                Bienvenue sur la page 
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-[#FFD700]">
                                    FGBMFI LADIES MADAGASCAR
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl text-slate-700 leading-relaxed">
                        <p className="text-lg sm:text-xl md:text-2xl">
                            Chères femmes d'affaires, entrepreneures, leaders et visionnaires, cette page est votre espace d'inspiration, de connexion et de croissance.
                        </p>

                        <p className="text-lg sm:text-xl md:text-2xl">
                            Notre mission : <span className="font-bold text-[#C00000]">encourager, soutenir et équiper</span> les femmes dans leur appel entrepreneurial, mais surtout leur faire connaître Jésus-Christ—pour qu'Il fasse de leurs entreprises non seulement un succès économique, mais aussi une mission de vie.
                        </p>

                        <div className="bg-gradient-to-r from-[#C00000] to-[#FFD700] p-[2px] rounded-xl sm:rounded-2xl">
                            <div className="bg-white p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl">
                                <p className="text-base sm:text-lg md:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-[#FFD700] italic">
                                    "Un espace d'inspiration et de croissance pour chaque femme visionnaire."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="group bg-[#FFFFFF] rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 shadow-lg border border-[#E5E5E5] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#C00000] to-[#FFD700] rounded-xl sm:rounded-2xl flex items-center justify-center text-white mb-4 sm:mb-5 md:mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                {section.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-[#000000] mb-2 group-hover:text-[#C00000] transition-colors">
                                {section.title}
                            </h3>
                            <p className="text-sm sm:text-base text-[#000000] leading-relaxed">
                                {section.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FgbmfiLadies;