import { UserPlus } from 'lucide-react';
import ReusableHero from '../components/ReusableHero';

const JoinUs = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-surface/30">
            {/* Hero */}
            <ReusableHero
                variant="join"
                badge="Rejoignez-nous"
                icon="user-plus"
                title="Pourquoi devenir membre ?"
                subtitle="FGBMFI"
                description="Découvrez les raisons de nous rejoindre et comment participer activement à nos missions."
                centered
            />

            {/* Informations */}
            <section className="py-16 -mt-20 relative z-10">
                <div className="max-w-3xl mx-auto px-4">
                    <ul className="space-y-6 text-lg text-gray-900">
                        <li className="flex items-start gap-3">
                            <span className="text-secondary text-2xl font-bold">•</span>
                            <span>Partager votre foi avec d’autres professionnels chrétiens.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary text-2xl font-bold">•</span>
                            <span>Développer votre réseau pour la gloire de Dieu.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary text-2xl font-bold">•</span>
                            <span>Participer à des formations, événements et missions du FGBMFI.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-secondary text-2xl font-bold">•</span>
                            <span>Être un acteur actif de la dernière grande moisson avant le retour de Jésus-Christ.</span>
                        </li>
                    </ul>

                    {/* Google Form Button */}
                    <div className="mt-12 text-center">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSeNHNbCNrrj_qRCqsIdupjYTCWQLkIZLWCEPoLU4nJGjpqd_w/viewform?usp=header"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-primary text-white py-4 px-8 rounded-xl font-bold text-lg hover:bg-secondary transition-colors"
                        >
                            Devenir membre
                            <UserPlus className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JoinUs;
