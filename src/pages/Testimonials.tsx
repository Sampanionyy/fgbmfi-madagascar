import { BookOpen, Heart, Shield, Lightbulb, Quote, CheckCircle } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

interface Lesson {
    icon: any;
    title: string;
    description: string;
}

const Testimonials: React.FC = () => {
    const lessons: Lesson[] = [
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Cherchez la Volonté de Dieu Avant de Décider",
            description: "Quelle que soit la pression ou l'urgence d'une opportunité, ne négligez jamais de demander au Seigneur Sa volonté. L'hésitation est souvent un signal d'alarme divin."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Restez Intègre",
            description: "Refuser de compromettre sa foi pour un poste ou un salaire est le témoignage le plus puissant. L'intégrité est notre marque de fabrique en Christ."
        },
        {
            icon: <CheckCircle className="w-6 h-6" />,
            title: "Confiez vos Batailles à Dieu",
            description: "Dans les moments d'injustice, souvenez-vous d'Exode 14:14. La paix vient de la confiance en Dieu. Il est le Guerrier puissant qui accorde toujours la victoire à ceux qui se confient en Lui."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
            {/* Hero Section */}
            <ReusableHero
                variant="testimonials"
                badge="Témoignage"
                icon="heart"
                title="La Nasse : Quand la Foi Triomphe du Piège Professionnel"
                subtitle="Par Rabefarihy Voahangy"
                description="Un témoignage puissant de victoire divine dans le monde professionnel"
                centered
            />

            {/* Introduction Quote */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-gradient-to-r from-red-500 to-yellow-500 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                        <Quote className="w-full h-full text-white" />
                    </div>
                    <p className="text-xl md:text-2xl text-white font-semibold italic relative z-10 text-center">
                        « L'Éternel combattra pour vous ; et vous, gardez le silence »
                    </p>
                    <p className="text-white/90 text-center mt-4 text-lg">
                        — Exode 14:14
                    </p>
                </div>
            </div>

            {/* Le Contexte */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                            <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            Le Contexte : Une Bénédiction Ambiguë
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            À l'approche de mes 64 ans, recevoir une offre d'emploi à Madagascar, où le chômage est endémique, était, en soi, une bénédiction. Malgré un bon salaire et un contrat d'un an seulement, qui me permettrait de continuer à soutenir des serviteurs de Dieu, j'ai pourtant hésité.
                        </p>
                        
                        <div className="bg-slate-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                            <p className="italic">
                                Mon cœur avait reçu un avertissement en songe: « C'est assez, en effet, d'avoir dans le temps passé accompli la volonté des païens...La fin de toutes choses est proche. Soyez donc sages et sobres, pour vaquer à la prière » (1 Pierre 4:3, 7).
                            </p>
                        </div>
                        
                        <p>
                            Hélas, l'attrait de l'opportunité et la certitude de pouvoir bien faire le travail l'ont emporté. J'ai mordu à l'hameçon de ce que j'appelle aujourd'hui <span className="font-semibold text-red-600">« La Nasse »</span> – un piège séduisant et trompeur.
                        </p>
                    </div>
                </div>
            </div>

            {/* L'Épreuve */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            L'Épreuve : Un Refus d'Éthique
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            Moins de trois mois après mon arrivée, j'ai dû me rendre à l'évidence : la manière de travailler et les objectifs flous ne me convenaient pas. Pire, certaines pratiques étaient contraires à l'éthique. En tant qu'enfant de Dieu, ma conscience m'interdisait de m'y plier.
                        </p>
                        
                        <p>
                            J'ai démissionné, refusant de faire des choses qui m'auraient déshonorée et causé du tort à l'entreprise. Ce refus, cependant, a provoqué la colère des dirigeants.
                        </p>
                        
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                            <p className="font-semibold text-red-900">
                                J'étais confrontée à une sanction très lourde : le paiement d'une pénalité équivalente à neuf mois de salaire, l'application stricte de la nouvelle loi du travail.
                            </p>
                        </div>
                        
                        <p>
                            Je me retrouvais dans un combat mental, spirituel, et même physique. J'ai retiré ma démission pour négocier, mais après 19 jours d'incertitude, le verdict est tombé : départ sous 24 heures et paiement de la pénalité.
                        </p>
                        
                        <p>
                            En quittant les lieux, malgré le sourire, je n'avais qu'une chose à faire : m'abandonner totalement à Jésus et implorer Son salut. C'est alors que la parole de l'Éternel est venue résonner puissamment dans mon cœur : <span className="font-bold text-red-600">« L'Éternel combattra pour vous ; et vous, gardez le silence »</span> (Exode 14:14).
                        </p>
                    </div>
                </div>
            </div>

            {/* La Victoire */}
            <div className="max-w-4xl mx-auto px-4 py-12">
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-xl p-8 md:p-12 border-2 border-yellow-400">
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center">
                            <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            La Victoire : Dieu Combat, Je Garde le Silence
                        </h2>
                    </div>
                    
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                        <p>
                            Plusieurs jours plus tard, l'entreprise m'a convoqué à une réunion de négociation. Avant de partir, j'ai prié : <span className="italic">« C'est Toi, Seigneur, qui combattras pour moi. Tu mettras les paroles sur mes lèvres »</span>.
                        </p>
                        
                        <p>
                            Arrivée au bureau, au lieu d'une confrontation avec les directeurs, l'assistante m'a remis un document à lire et à signer.
                        </p>
                        
                        <div className="bg-yellow-100 border-2 border-yellow-400 p-6 rounded-xl">
                            <p className="font-bold text-yellow-900 text-xl">
                                À ma surprise et à ma joie immense, le document stipulait que je ne devais rien, pas même un ariary! Je pouvais partir librement, en échange de ne pas réclamer mon solde de tout compte et de ne pas saisir la justice.
                            </p>
                        </div>
                        
                        <p>
                            Le document était signé par la Directrice Générale (DG), une étrangère qui venait de rentrer de mission. <span className="font-bold text-red-600">Gloire au Seigneur !</span> Il a combattu pour moi pendant que je gardais le silence.
                        </p>
                        
                        <p>
                            J'ai ensuite rencontré la DG pour la remercier. J'ai compris qu'elle aussi était croyante, et que le Seigneur avait touché son cœur et son esprit pour corriger l'injustice qui m'était destinée. Elle m'a répété : <span className="italic">« J'ai vraiment apprécié ton attitude »</span>.
                        </p>
                    </div>
                </div>
            </div>

            {/* Leçons */}
            <div className="bg-gradient-to-r from-red-600 via-red-500 to-yellow-600 text-white py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-6 shadow-lg border border-white/30">
                            <Lightbulb className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            Leçons pour l'Homme d'Affaires <span className="text-yellow-300">Chrétien</span>
                        </h2>
                        <p className="text-xl text-white/90">
                            Ce témoignage nous rappelle des vérités fondamentales pour nous, professionnels chrétiens
                        </p>
                    </div>

                    <div className="space-y-6">
                        {lessons.map((lesson: Lesson, index: number) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-red-600">
                                        {lesson.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-yellow-300">
                                            {lesson.title}
                                        </h3>
                                        <p className="text-white/90 leading-relaxed">
                                            {lesson.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-100 text-center">
                    <p className="text-2xl font-bold text-slate-900 mb-4">
                        Sa grâce peut même toucher le cœur des décideurs non-chrétiens.
                    </p>
                    <p className="text-xl text-red-600 font-semibold mb-6">
                        Dieu ouvre la nasse et libère celui qui crie à Lui !
                    </p>
                    <div className="inline-block border-t-2 border-slate-300 pt-4">
                        <p className="text-lg text-slate-600 italic">
                            Signé par <span className="font-semibold text-slate-900">Rabefarihy Voahangy</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;