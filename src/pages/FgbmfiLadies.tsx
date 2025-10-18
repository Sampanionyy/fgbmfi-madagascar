import { Users, Heart, Star, Award } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

const FgbmfiLadies = () => {
    const sections = [
        {
            icon: <Star className="w-8 h-8 text-[#FFD700]" />,
            title: "Témoignages de femmes d’impact",
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
            description: "Rencontrez d'autres femmes d’affaires et entrepreneures partageant la même vision."
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
                subtitle="Inspiration, connexion et croissance pour les femmes d’affaires"
                description="Encourager et équiper les femmes dans leur appel entrepreneurial tout en connaissant Jésus-Christ"
                centered
            />

           <div className="max-w-7xl mx-auto px-4 py-24 relative">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#C00000] rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FFD700] rounded-full opacity-20 blur-3xl"></div>

                <div className="relative bg-white rounded-[3rem] shadow-2xl p-12 md:p-20 border border-[#E5E5E5]">
                    <div className="flex items-start gap-6 mb-10">
                        <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-[#C00000] to-[#FFD700] rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
                            <Users className="w-10 h-10 text-white" />
                        </div>
                        <div>
                            <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-4 leading-tight">
                                Bienvenue sur la page 
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-[#FFD700]">
                                    FGBMFI LADIES MADAGASCAR
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="space-y-8 text-xl text-slate-700 leading-relaxed">
                        <p className="text-2xl">
                            Chères femmes d’affaires, entrepreneures, leaders et visionnaires, cette page est votre espace d’inspiration, de connexion et de croissance.
                        </p>

                        <p className="text-2xl">
                            Notre mission : <span className="font-bold text-[#C00000]">encourager, soutenir et équiper</span> les femmes dans leur appel entrepreneurial, mais surtout leur faire connaître Jésus-Christ—pour qu’Il fasse de leurs entreprises non seulement un succès économique, mais aussi une mission de vie.
                        </p>

                        <div className="bg-gradient-to-r from-[#C00000] to-[#FFD700] p-[2px] rounded-2xl">
                            <div className="bg-white p-6 rounded-2xl">
                                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-[#FFD700] italic">
                                    "Un espace d’inspiration et de croissance pour chaque femme visionnaire."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-6xl mx-auto px-4 pb-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="group bg-[#FFFFFF] rounded-3xl p-8 shadow-lg border border-[#E5E5E5] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#C00000] to-[#FFD700] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                {section.icon}
                            </div>
                            <h3 className="text-xl font-black text-[#000000] mb-2 group-hover:text-[#C00000] transition-colors">
                                {section.title}
                            </h3>
                            <p className="text-[#000000] leading-relaxed">
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
