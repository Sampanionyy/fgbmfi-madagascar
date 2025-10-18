import { Globe, Users, Award, TrendingUp, Heart, Sparkles } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

const Story = () => {
    const timelineData = [
        {
            period: "2003-2007",
            title: "Les débuts : la fondation et la vision",
            icon: <Sparkles className="w-6 h-6" />,
            color: "from-blue-500 to-cyan-500",
            events: [
                {
                    year: "2003",
                    description: "Mise en place officielle du FGBMFI Madagascar en novembre, sous l'impulsion de Jean-Pierre WITZMANN (Allemagne)",
                    highlight: "Création des premiers chapitres : Antananarivo, Antsirabe et Toamasina"
                },
                {
                    year: "2005",
                    description: "Missions d'édification avec Jean-Pierre WITZMANN, Andreas SCHREIBER et Sigrid DOTTER"
                },
                {
                    year: "2006",
                    description: "Extension remarquable avec 5 nouveaux chapitres",
                    highlight: "Majunga, Ambatondrazaka, Amparafaravola, Ambositra et Fianarantsoa"
                },
                {
                    year: "2007",
                    description: "Formation nationale sur le leadership, la communication et la finance",
                    highlight: "Grand meeting « Les Chrétiens et les Affaires » avec Gérard GODEL (Suisse)"
                }
            ]
        },
        {
            period: "2015-2020",
            title: "Les années de consolidation et de relance",
            icon: <TrendingUp className="w-6 h-6" />,
            color: "from-purple-500 to-pink-500",
            events: [
                {
                    year: "2015",
                    description: "Relance dynamique avec les visites de Mike ADEGUN, Jude EMEME et Lyoha CHRIS",
                    highlight: "Mission internationale du 1er au 13 décembre avec ouverture des chapitres de Carion et Moramanga"
                },
                {
                    year: "2016-2017",
                    description: "Délégation nigériane conduite par Mike ADEGUN, suivie d'une équipe de cinq leaders",
                    highlight: "Formations et édifications pour les responsables malgaches"
                },
                {
                    year: "2018",
                    description: "Première Convention Nationale du FGBMFI Madagascar les 5 et 6 octobre"
                },
                {
                    year: "2019",
                    description: "Mission fructueuse d'Ukpala Ambrose et Ulasi Paul Dike",
                    highlight: "Ouverture du chapitre d'Antalaha"
                },
                {
                    year: "2020",
                    description: "Expansion malgré le contexte mondial difficile",
                    highlight: "Nouveaux chapitres à Ambalavao et Ihosy"
                }
            ]
        },
        {
            period: "2023-2025",
            title: "Le temps du réveil et du rayonnement international",
            icon: <Heart className="w-6 h-6" />,
            color: "from-red-500 to-orange-500",
            events: [
                {
                    year: "Juin 2023",
                    description: "Véritable réveil spirituel avec la visite inspirante de Gratien de Souza",
                    highlight: "Rallumage de la flamme de la mission"
                },
                {
                    year: "Mai 2024",
                    description: "Grand rassemblement national aux Colonnades",
                    highlight: "Consolidation de la renaissance spirituelle"
                },
                {
                    year: "Mai 2025",
                    description: "Jumelage historique Indonésie-Paris aux Colonnades",
                    highlight: "Conduit par Ardian Kristanto et Gratien de Souza avec forte mobilisation du Ladies Ministry"
                }
            ]
        }
    ];

    const internationalPartners = [
        { country: "Allemagne", flag: "🇩🇪" },
        { country: "Nigeria", flag: "🇳🇬" },
        { country: "Russie", flag: "🇷🇺" },
        { country: "Inde", flag: "🇮🇳" },
        { country: "Suisse", flag: "🇨🇭" },
        { country: "Grande-Bretagne", flag: "🇬🇧" },
        { country: "Indonésie", flag: "🇮🇩" },
        { country: "France", flag: "🇫🇷" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}

            <ReusableHero
                variant="story"
                icon="calendar"
                title="Notre Histoire"
                subtitle="Nos débuts"
                description="De 2003 à 2025, une marche de foi, d'engagement persévérant et de grâce renouvelée."
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
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                </svg>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Genèse et Réveil du <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500">FGBMFI Madagascar</span>
                            </h2>
                            
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full"></div>
                                    <p className="text-xl text-slate-700 leading-relaxed">
                                        Le <span className="font-semibold text-slate-900">Full Gospel Business Men's Fellowship International (FGBMFI)</span> à Madagascar a été officiellement mis en place en <span className="font-semibold text-slate-900">novembre 2003</span>, sous l'impulsion du promoteur et initiateur <span className="font-semibold text-slate-900">Jean-Pierre WITZMANN</span>, représentant de la FGBMFI Allemagne.
                                    </p>
                                </div>
                                
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-1 bg-gradient-to-b from-yellow-400 to-red-500 rounded-full"></div>
                                    <p className="text-xl text-slate-700 leading-relaxed">
                                        Depuis lors, l'histoire du FGBMFI Madagascar témoigne d'une <span className="font-semibold text-slate-900">marche de foi remarquable</span>, marquée par des visites internationales, des missions d'édification et un impact grandissant dans le monde des affaires chrétien.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                {timelineData.map((period, index) => (
                    <div key={index} className="mb-16">
                        {/* Period Header */}
                        <div className="flex items-center mb-8">
                            <div className={`bg-gradient-to-r ${period.color} text-white p-4 rounded-xl shadow-lg`}>
                                {period.icon}
                            </div>
                            <div className="ml-6">
                                <h3 className="text-3xl font-bold text-slate-900">{period.period}</h3>
                                <p className="text-xl text-slate-600">{period.title}</p>
                            </div>
                        </div>

                        {/* Events */}
                        <div className="grid md:grid-cols-2 gap-6">
                            {period.events.map((event, eventIndex) => (
                                <div
                                    key={eventIndex}
                                    className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-slate-300 hover:border-red-500 transition-all duration-300 hover:shadow-xl"
                                >
                                    <div className={`inline-block bg-gradient-to-r ${period.color} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                                        {event.year}
                                    </div>
                                    <p className="text-slate-700 mb-3 leading-relaxed">
                                        {event.description}
                                    </p>
                                    {event.highlight && (
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded">
                                            <p className="text-sm font-semibold text-yellow-900">
                                                ✨ {event.highlight}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* International Partners */}
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                        <h2 className="text-4xl font-bold mb-4">Nos Partenaires Internationaux</h2>
                        <p className="text-xl text-slate-300">
                            Une collaboration mondiale pour l'avancement du Royaume
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {internationalPartners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-5xl mb-3">{partner.flag}</div>
                                <p className="font-semibold text-lg">{partner.country}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Story;