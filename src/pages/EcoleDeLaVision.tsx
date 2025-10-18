import { BookOpen, Sparkles, Heart, Users, Zap, Eye, Star, Award } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

const EcoleDeLaVision = () => {
    const books = [
        {
            title: "Les personnes les plus heureuses sur Terre",
            icon: <Star className="w-12 h-12 text-[#FFD700]" />,
            color: "from-[#FFD700] to-[#C00000]",
            message: "Le réveil spirituel à travers des hommes et femmes ordinaires",
            key: "Chaque croyant a reçu des dons et une mission unique de Dieu"
        },
        {
            title: "Vision intensifiée",
            icon: <Eye className="w-12 h-12 text-[#C00000]" />,
            color: "from-[#C00000] to-[#FFD700]",
            message: "Dieu cherche un peuple préparé à servir avec puissance",
            key: "La vraie puissance se manifeste dans l'action et la démonstration de la foi"
        },
        {
            title: "Dimension ultime",
            icon: <Zap className="w-12 h-12 text-[#007A3D]" />,
            color: "from-[#007A3D] to-[#FFD700]",
            message: "Être UN avec Dieu et Jésus",
            key: "Vivre en parfaite harmonie avec la nature, les paroles, l'amour et la foi de Christ"
        },
        {
            title: "Vie divine",
            icon: <Sparkles className="w-12 h-12 text-[#007A3D]" />,
            color: "from-[#007A3D] to-[#C00000]",
            message: "Le plan de Dieu pour transformer chaque croyant",
            key: "Demeurer en Christ permet de porter du fruit spirituel"
        },
        {
            title: "Voici la gloire de Dieu",
            icon: <Award className="w-12 h-12 text-[#FFD700]" />,
            color: "from-[#FFD700] to-[#C00000]",
            message: "Dieu opère directement par l'Esprit",
            key: "L'effusion du Saint-Esprit sur toute chair, préparant la Grande Moisson"
        },
        {
            title: "Venez, exaltons-le",
            icon: <Users className="w-12 h-12 text-[#C00000]" />,
            color: "from-[#C00000] to-[#FFD700]",
            message: "Exalter Jésus dans nos vies et communautés",
            key: "Dieu répandra Son Esprit sur ceux qui honorent Son Fils"
        }
    ];

    const features = [
        {
            icon: <BookOpen className="w-7 h-7" />,
            title: "12 semaines",
            description: "Un cheminement spirituel complet"
        },
        {
            icon: <Heart className="w-7 h-7" />,
            title: "Transformation",
            description: "Expérience prophétique profonde"
        },
        {
            icon: <Users className="w-7 h-7" />,
            title: "Communion",
            description: "Rencontre authentique avec Dieu"
        },
        {
            icon: <Zap className="w-7 h-7" />,
            title: "Activation",
            description: "Réveil de l'appel divin"
        }
    ];

    return (
        <div className="min-h-screen bg-[#FFFFFF]">
            {/* Hero */}
            <ReusableHero
                title="L'École de la Vision"
                subtitle="Une expérience prophétique et spirituelle"
                badge="Formation Spirituelle"
                icon="info"
                description='Une formation spirituelle née du réveil'
                centered
            />

            {/* Introduction */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="relative">
                    <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#C00000] rounded-full opacity-10 blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FFD700] rounded-full opacity-10 blur-3xl"></div>

                    <div className="relative bg-[#E5E5E5] rounded-[3rem] shadow-2xl p-12 md:p-20 border border-[#C00000]">
                        <div className="flex items-start gap-6 mb-10">
                            <div className="flex-shrink-0 w-20 h-20 bg-[#C00000] rounded-3xl flex items-center justify-center shadow-xl transform rotate-6">
                                <Eye className="w-10 h-10 text-[#FFFFFF]" />
                            </div>
                            <div>
                                <h2 className="text-5xl font-black text-[#000000] mb-4 leading-tight">
                                    Plus qu'une formation,
                                    <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-[#FFD700]">
                                        une transformation
                                    </span>
                                </h2>
                            </div>
                        </div>

                        <div className="space-y-8 text-xl text-[#000000] leading-relaxed">
                            <p className="text-2xl">
                                L'École de la Vision n'est pas une école conventionnelle. C'est une <span className="font-bold text-[#C00000]">expérience prophétique et spirituelle</span>, destinée à réveiller la conscience du Corps de Christ et à activer chaque membre dans son appel divin.
                            </p>

                            <div className="bg-gradient-to-r from-[#C00000] to-[#FFD700] p-[2px] rounded-2xl">
                                <div className="bg-[#FFFFFF] p-8 rounded-2xl">
                                    <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-[#FFD700] italic">
                                        "Être les mains, la voix et le cœur de Jésus-Christ dans la société."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="max-w-6xl mx-auto px-4 pb-20">
                <div className="grid md:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group bg-[#FFFFFF] rounded-3xl p-8 shadow-lg border border-[#E5E5E5] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer"
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-[#C00000] to-[#FFD700] rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-black text-[#000000] mb-2 group-hover:text-[#C00000] transition-colors">
                                {feature.title}
                            </h3>
                            <p className="text-[#000000]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Témoignage */}
            <div className="bg-[#C00000] py-20 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-xl rounded-[3rem] p-12 md:p-16 border border-white/20 shadow-2xl">
                        <div className="flex items-center justify-center mb-8">
                            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
                            <div className="w-16 h-[2px] bg-gradient-to-r from-[#FFD700] to-transparent mx-2"></div>
                            <Star className="w-8 h-8 text-[#FFD700]" />
                            <div className="w-16 h-[2px] bg-gradient-to-l from-[#FFD700] to-transparent mx-2"></div>
                            <div className="w-2 h-2 bg-[#FFD700] rounded-full animate-pulse"></div>
                        </div>

                        <blockquote className="text-2xl md:text-3xl text-[#FFFFFF]/90 leading-relaxed text-center font-light italic">
                            "Je lis ce livre depuis 30 ans, mais cette fois, dans l'École de la Vision, j'ai pleuré trois jours en découvrant Jésus sur chaque page. <span className="font-bold text-[#FFD700]">Il était là</span>, je ne l'avais simplement pas vu ainsi auparavant."
                        </blockquote>

                        <p className="text-[#E5E5E5] text-center mt-8 text-lg">
                            — Membre senior du FGBMFI
                        </p>
                    </div>
                </div>
            </div>

            {/* Livres */}
            <div className="max-w-7xl mx-auto px-4 py-24">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#C00000] to-[#FFD700] text-white px-8 py-4 rounded-full mb-8 shadow-xl">
                        <BookOpen className="w-6 h-6" />
                        <span className="font-bold text-lg">Les 6 Livres Enseignés</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black text-[#000000] mb-6">
                        Les Révélations de
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C00000] to-[#FFD700]">
                            Demos Shakarian
                        </span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#FFFFFF] rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${book.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                            <div className="relative p-8">
                                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                                    {book.icon}
                                </div>

                                <h3 className="text-2xl font-black text-[#000000] mb-4 leading-tight group-hover:text-[#C00000] transition-colors">
                                    {book.title}
                                </h3>

                                <p className="text-[#000000] mb-4 leading-relaxed font-medium">
                                    {book.message}
                                </p>

                                <div className={`bg-gradient-to-r ${book.color} p-[2px] rounded-xl`}>
                                    <div className="bg-[#FFFFFF] p-4 rounded-xl">
                                        <p className="text-sm font-bold text-[#000000]">
                                            🔑 {book.key}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EcoleDeLaVision;
