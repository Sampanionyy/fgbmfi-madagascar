import { ExternalLink, Mail, Search, Users } from "lucide-react";

const QuickActions = () => {
    const actions = [
        {
            icon: <Search className="w-8 h-8" />,
            title: "Trouver un chapitre",
            description: "Localisez le chapitre le plus proche de vous",
            gradient: "from-primary to-primary/80"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Recevoir une invitation",
            description: "Soyez invité à nos prochaines réunions",
            gradient: "from-secondary to-secondary/80"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Assister à la réunion",
            description: "Participez à nos rassemblements mensuels",
            gradient: "from-accent to-accent/80"
        }
    ];

    return (
        <section className="py-16 -mt-20 relative z-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    {actions.map((action, idx) => (
                        <div key={idx} className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
                            <div className={`bg-gradient-to-br ${action.gradient} p-6 text-white`}>
                                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4 backdrop-blur-sm">
                                    {action.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{action.title}</h3>
                                <p className="text-white/90">{action.description}</p>
                            </div>
                            <div className="p-6 bg-surface/30">
                                <button className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                                    En savoir plus <ExternalLink className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickActions;