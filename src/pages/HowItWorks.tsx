import { Users, Sparkles, MapPin, Building2, Heart, TrendingUp, Star, Coffee, Rocket, Zap, Flower2 } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';
import { Link } from 'react-router-dom';

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
            icon: <Users className="w-8 h-8" />,
            color: "from-blue-500 to-cyan-500",
            description: "Hommes et femmes d'affaires ensemble",
            count: "7 chapitres actifs"
        },
        {
            type: "Ladies Chapters",
            icon: <Heart className="w-8 h-8" />,
            color: "from-pink-500 to-rose-500",
            description: "Chapitres dédiés aux femmes entrepreneures",
            count: "2 chapitres actifs"
        }
    ];

    const chaptersInLaunch = [
        { name: "Anjanahary", type: "Chapitre mixte", icon: <Rocket className="w-6 h-6" />, color: "from-blue-400 to-blue-600" },
        { name: "Itaosy (67 ha)", type: "Chapitre mixte", icon: <Star className="w-6 h-6" />, color: "from-cyan-400 to-cyan-600" },
        { name: "Ikianja", type: "Chapitre mixte", icon: <Sparkles className="w-6 h-6" />, color: "from-teal-400 to-teal-600" },
        { name: "Ambohimangakely", type: "Chapitre mixte", icon: <Zap className="w-6 h-6" />, color: "from-sky-400 to-sky-600" }
    ];

    const ladiesChapters = [
        { name: "Tana", icon: <Heart className="w-6 h-6" />, color: "from-pink-400 to-pink-600" },
        { name: "Toliara", icon: <Flower2 className="w-6 h-6" />, color: "from-rose-400 to-rose-600" }
    ];

    const specialChapters = [
        { 
            name: "National Chapter", 
            status: "Bureau national", 
            description: "Chapitre principal",
            color: "from-red-500 to-orange-500", 
            icon: <Building2 className="w-8 h-8" /> 
        },
        { 
            name: "Ambositra", 
            status: "En veille", 
            description: "Réorganisation en cours",
            color: "from-slate-400 to-slate-500", 
            icon: <MapPin className="w-8 h-8" /> 
        },
        { 
            name: "Moramanga", 
            status: "Fonctionnel", 
            description: "Activités régulières",
            color: "from-green-500 to-emerald-500", 
            icon: <Star className="w-8 h-8" /> 
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <style>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                @keyframes slideIn {
                    from { opacity: 0; transform: translateX(-30px); }
                    to { opacity: 1; transform: translateX(0); }
                }
                .float-animation { animation: float 6s ease-in-out infinite; }
            `}</style>

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
            <div className="max-w-7xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <div className="inline-block bg-red-100 text-red-600 px-6 py-2 rounded-full font-semibold mb-6">
                        Notre Mission
                    </div>
                    <h2 className="text-5xl font-bold text-gray-900 mb-6">
                        Les Chapitres <span className="text-red-600">FGBMFI</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Des communautés locales d'hommes et femmes d'affaires unis par la foi et l'entrepreneuriat
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {functionalities.map((func, index) => (
                        <div
                            key={index}
                            className="relative group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-yellow-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 h-full hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <div className="bg-gradient-to-br from-red-500 to-orange-500 w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {func.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {func.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {func.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Types de chapitres - Nouveau design */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                        Nos <span className="text-red-600">Types</span> de Chapitres
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {chapterTypes.map((type, index) => (
                            <div key={index} className="relative overflow-hidden rounded-3xl">
                                <div className={`absolute inset-0 bg-gradient-to-br ${type.color} opacity-10`}></div>
                                <div className="relative bg-white border-2 border-gray-200 rounded-3xl p-10 hover:border-transparent hover:shadow-2xl transition-all duration-500 group">
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${type.color} opacity-10 rounded-bl-full`}></div>
                                    <div className={`bg-gradient-to-br ${type.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white mb-6 float-animation`}>
                                        {type.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                        {type.type}
                                    </h3>
                                    <p className="text-lg text-gray-700 mb-4">
                                        {type.description}
                                    </p>
                                    <div className={`inline-block bg-gradient-to-r ${type.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                                        {type.count}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Situation Madagascar - Nouveau style moderne */}
            <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-3 bg-yellow-100 text-yellow-700 px-6 py-3 rounded-full font-semibold mb-6">
                            <MapPin className="w-5 h-5" />
                            Madagascar
                        </div>
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">
                            Nos Chapitres à <span className="text-red-600">Madagascar</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Un réseau dynamique en pleine expansion sur tout le territoire malgache
                        </p>
                    </div>

                    {/* Chapitres en lancement - Cards modernes */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Chapitres en Lancement</h3>
                            <div className="ml-auto bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                                4 chapitres
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {chaptersInLaunch.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                                >
                                    <div className={`bg-gradient-to-br ${chapter.color} w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        {chapter.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-900 mb-2">{chapter.name}</h4>
                                    <p className="text-sm text-gray-600">{chapter.type}</p>
                                    <div className="absolute top-4 right-4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Ladies Chapters - Design élégant */}
                    <div className="mb-16">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-gray-900">Ladies Chapters</h3>
                            <div className="ml-auto bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-semibold">
                                2 chapitres
                            </div>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {ladiesChapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="relative overflow-hidden bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-pink-500 hover:shadow-2xl transition-all duration-300 group"
                                >
                                    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br ${chapter.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500`}></div>
                                    <div className="relative flex items-center gap-6">
                                        <div className={`bg-gradient-to-br ${chapter.color} w-20 h-20 rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                            {chapter.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-3xl font-bold text-gray-900 mb-2">{chapter.name}</h4>
                                            <p className="text-gray-600">Chapitre féminin actif</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Chapitres spéciaux - Cards premium */}
                    <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Chapitres à Statut Spécial</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            {specialChapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                    <div className="relative">
                                        <div className={`bg-gradient-to-br ${chapter.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                            {chapter.icon}
                                        </div>
                                        <h4 className="text-2xl font-bold text-gray-900 mb-2">{chapter.name}</h4>
                                        <div className={`inline-block bg-gradient-to-r ${chapter.color} text-white px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                                            {chapter.status}
                                        </div>
                                        <p className="text-gray-600">{chapter.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action - Design moderne */}
            <div className="max-w-5xl mx-auto px-4 py-20">
                <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-500 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
                    <div className="relative">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-8">
                            <TrendingUp className="w-10 h-10 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Rejoignez Notre Réseau
                        </h2>
                        <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Faites partie d'une communauté dynamique d'hommes et femmes d'affaires chrétiens engagés pour l'excellence et l'impact
                        </p>
                        <Link to="/join-us" className="bg-white text-red-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-yellow-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3">
                            Devenir membre
                            <TrendingUp className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;