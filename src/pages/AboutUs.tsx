import { Globe, Target, Eye, Users, Briefcase, Heart, Sparkles, BookOpen, TrendingUp, Handshake } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

const About = () => {
    const missions = [
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Faire connaître Jésus-Christ",
            description: "à tous les hommes et femmes d'affaires"
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Rappeler chacun",
            description: "à une relation vivante avec Dieu"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Encourager le baptême",
            description: "dans le Saint-Esprit et la croissance spirituelle"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Former et équiper",
            description: "des leaders pour accomplir la Grande Commission"
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            title: "Créer des opportunités",
            description: "de réseautage chrétien, d'échange et de communion"
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Favoriser l'unité",
            description: "et la coopération dans le Corps de Christ"
        }
    ];

    const stats = [
        { number: "85+", label: "Pays" },
        { number: "7 000+", label: "Chapitres" },
        { number: "25", label: "Langues" },
        { number: "Millions", label: "De lecteurs" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <ReusableHero
                variant="aboutus"
                icon="globe"
                title="À propos de FGBMFI"
                subtitle="Une fraternité mondiale d'hommes et de femmes d'affaires chrétiens"
                description="Découvrez notre mission, vision et impact global"
                centered
            />

            {/* Introduction */}
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
                                <Globe className="w-8 h-8 text-white" />
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">FGBMFI</span> - Une Fraternité Mondiale
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full"></div>
                                    <p className="text-xl text-slate-700 leading-relaxed">
                                        Le <span className="font-semibold text-slate-900">FGBMFI (Full Gospel Business Men's Fellowship International)</span> est la plus grande fraternité d'hommes et de femmes d'affaires chrétiens au monde, présente dans plus de <span className="font-semibold text-slate-900">85 pays</span> avec plus de <span className="font-semibold text-slate-900">7 000 chapitres locaux</span>.
                                    </p>
                                </div>
                                
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full"></div>
                                    <p className="text-xl text-slate-700 leading-relaxed">
                                        Au-delà d'un réseau professionnel, nous créons un <span className="font-semibold text-slate-900">espace unique de réseautage pour la gloire du Seigneur</span> : hommes et femmes d'affaires se rencontrent, partagent leurs expériences, échangent des idées et appliquent les valeurs chrétiennes dans leurs entreprises, leurs familles et leurs communautés.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-8 text-center border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-600 font-semibold">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Book Section */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                            <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl">
                                <BookOpen className="w-16 h-16 text-white" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                « Les hommes les plus heureux sur Terre »
                            </h2>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                Découvrez l'histoire inspirante de ce mouvement qui transforme des vies et touche les nations dans ce livre lu par <span className="font-semibold text-white">des millions de personnes</span> et traduit en <span className="font-semibold text-white">25 langues</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl mb-6 shadow-lg">
                        <Target className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Notre <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">Mission</span>
                    </h2>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        Six piliers qui guident notre action quotidienne
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {missions.map((mission, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-lg p-6 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white mb-4 shadow-md">
                                {mission.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                {mission.title}
                            </h3>
                            <p className="text-slate-600">
                                {mission.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Vision Section */}
            <div className="relative bg-gradient-to-br from-red-600 via-red-500 to-yellow-600 text-white py-20 px-4 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg border border-white/30">
                            <Eye className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Notre <span className="text-yellow-300">Vision</span>
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
                            <p className="text-xl md:text-2xl leading-relaxed mb-6 text-center">
                                Un <span className="font-bold text-yellow-300">mouvement mondial puissant</span> de laïcs, hommes et femmes, remplis du Saint-Esprit, utilisant leurs talents et ressources pour mener la dernière grande moisson avant le retour de Jésus-Christ.
                            </p>
                            <div className="h-1 w-24 bg-yellow-300 rounded-full mx-auto my-8"></div>
                            <p className="text-xl md:text-2xl leading-relaxed text-center font-semibold">
                                Un réseau vivant, inspirant et transformateur — pour impacter le monde des affaires et les nations pour Christ !
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;