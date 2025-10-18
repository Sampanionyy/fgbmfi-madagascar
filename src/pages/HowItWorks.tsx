import { Users, Sparkles, MapPin, Building2, Heart, TrendingUp, Star, Coffee } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

const HowItWorks = () => {
    const functionalities = [
        {
            icon: <Coffee className="w-8 h-8" />,
            title: "Partage d'expérience",
            description: "Des rencontres authentiques où chacun partage son parcours entrepreneurial et spirituel"
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Renforcement spirituel",
            description: "Croissance dans la foi et application des principes bibliques dans les affaires"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Réseautage",
            description: "Connexions professionnelles et opportunités d'affaires entre membres"
        },
        {
            icon: <Sparkles className="w-8 h-8" />,
            title: "Soutien mutuel",
            description: "Entraide dans les défis des affaires et de la vie chrétienne"
        }
    ];

    const chapterTypes = [
        {
            type: "Chapitres mixtes",
            icon: <Users className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-500",
            description: "Hommes et femmes d'affaires ensemble"
        },
        {
            type: "Ladies Chapters",
            icon: <Heart className="w-6 h-6" />,
            color: "from-pink-500 to-rose-500",
            description: "Chapitres dédiés aux femmes entrepreneures"
        }
    ];

    const chaptersInLaunch = [
        { name: "Anjanahary", type: "Chapitre mixte", icon: "" },
        { name: "Itaosy (67 ha)", type: "Chapitre mixte", icon: "" },
        { name: "Ikianja", type: "Chapitre mixte", icon: "" },
        { name: "Ambohimangakely", type: "Chapitre mixte", icon: "" }
    ];

    const ladiesChapters = [
        { name: "Tana", icon: "" },
        { name: "Toliara", icon: "" }
    ];

    const specialChapters = [
        { name: "National Chapter", status: "Bureau national / Chapitre principal", color: "from-red-500 to-orange-500", icon: <Building2 className="w-6 h-6" /> },
        { name: "Ambositra", status: "Chapitre en veille", color: "from-slate-400 to-slate-500", icon: <MapPin className="w-6 h-6" /> },
        { name: "Moramanga", status: "Chapitre fonctionnel", color: "from-green-500 to-emerald-500", icon: <Star className="w-6 h-6" /> }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <ReusableHero
                variant="howitworks"
                title="Comment fonctionne FGBMFI ?"
                badge="Fonctionnement des Chapitres"
                icon="info"
                subtitle='Découvrez les chapitres'
                description="Découvrez le rôle essentiel des chapitres locaux dans le réseau FGBMFI, favorisant le partage d'expérience, le renforcement spirituel, le réseautage et le soutien mutuel parmi les hommes et femmes d'affaires chrétiens."
                centered
            />

            {/* Fonctionnement Section */}
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-500 rounded-full opacity-10 blur-3xl"></div>
                    
                    <div className="relative bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl p-8 md:p-16 border border-slate-100 overflow-hidden">
                        {/* Background pattern */}
                        <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2"/>
                                <line x1="20" y1="100" x2="180" y2="100" stroke="currentColor" strokeWidth="2"/>
                                <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="2"/>
                            </svg>
                        </div>

                        <div className="relative">
                            {/* Icon badge */}
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl mb-6 shadow-lg">
                                <Users className="w-8 h-8 text-white" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Fonctionnement des <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Chapitres FGBMFI</span>
                            </h2>
                            
                            <div className="flex gap-4 mb-8">
                                <div className="flex-shrink-0 w-1 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full"></div>
                                <p className="text-xl text-slate-700 leading-relaxed">
                                    Les chapitres FGBMFI rassemblent des <span className="font-semibold text-slate-900">hommes et femmes d'affaires chrétiens</span> pour le partage d'expérience, le renforcement spirituel, le réseautage et le soutien mutuel dans les affaires et la vie chrétienne.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-12">
                                {functionalities.map((func, index) => (
                                    <div
                                        key={index}
                                        className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-md">
                                            {func.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {func.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {func.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Types de chapitres */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">
                        Types de <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Chapitres</span>
                    </h2>
                    <p className="text-xl text-slate-600">
                        Chaque chapitre peut être mixte ou réservé aux femmes
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {chapterTypes.map((type, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl shadow-xl p-8 border border-slate-100 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className={`w-20 h-20 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                                {type.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-3">
                                {type.type}
                            </h3>
                            <p className="text-lg text-slate-600">
                                {type.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Situation à Madagascar */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg border border-white/30">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Situation des Chapitres à <span className="text-yellow-300">Madagascar</span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Ces chapitres travaillent à relancer les activités, renforcer les liens entre membres et accroître l'impact du réseau sur le développement spirituel et économique des participants.
                        </p>
                    </div>

                    {/* Chapitres en lancement */}
                    <div className="mb-16">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-2xl mr-4">
                                🚀
                            </div>
                            <h3 className="text-3xl font-bold">Chapitres en période de lancement</h3>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {chaptersInLaunch.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <div className="text-3xl mb-3">{chapter.icon}</div>
                                    <h4 className="text-xl font-bold mb-2">{chapter.name}</h4>
                                    <p className="text-sm text-slate-300">{chapter.type}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ladies Chapters */}
                    <div className="mb-16">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mr-4">
                                <Heart className="w-6 h-6" />
                            </div>
                            <h3 className="text-3xl font-bold">Ladies Chapters</h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {ladiesChapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-xl p-6 border border-pink-400/30 hover:from-pink-500/30 hover:to-rose-500/30 transition-all duration-300"
                                >
                                    <div className="text-3xl mb-3">{chapter.icon}</div>
                                    <h4 className="text-xl font-bold">{chapter.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chapitres spéciaux */}
                    <div>
                        <h3 className="text-3xl font-bold mb-6">Chapitres à statut spécial</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {specialChapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 text-slate-900 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${chapter.color} rounded-xl flex items-center justify-center text-white mb-4 shadow-md`}>
                                        {chapter.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-2">{chapter.name}</h4>
                                    <p className="text-slate-600 font-semibold">{chapter.status}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
                        <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Rejoignez un Chapitre
                    </h2>
                    <p className="text-xl leading-relaxed mb-8">
                        Participez au développement spirituel et économique du réseau FGBMFI à Madagascar. Ensemble, impactons le monde des affaires pour Christ !
                    </p>
                    <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                        Devenir membre
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;