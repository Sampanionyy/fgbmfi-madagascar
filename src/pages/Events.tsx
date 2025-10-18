import { useState } from 'react';
import { Calendar, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { eventsData } from '../data/event-data';
import { useNavigate } from "react-router-dom";
import ReusableHero from '../components/ReusableHero';

const Events = () => {
    const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleEventClick = (eventId: string) => {
        navigate(`/events/${eventId}`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-surface/30">
            <ReusableHero
                variant="events"
                badge="Événements à venir"
                icon="calendar"
                title="Nos Prochains"
                subtitle="Événements"
                description="Rejoignez-nous pour des moments de communion, de partage et de croissance spirituelle."
                centered
            />


            {/* Events Grid */}
            <section className="py-16 -mt-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {eventsData.map((event) => (
                            <div
                                key={event.id}
                                className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                                onMouseEnter={() => setHoveredEvent(event.id)}
                                onMouseLeave={() => setHoveredEvent(null)}
                                onClick={() => handleEventClick(event.id)}
                            >
                                {/* Flyer Image */}
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Gradient Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    {/* Tag Badge */}
                                    <div className="absolute top-6 left-6">
                                        <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-gray-900 shadow-xl">
                                            <Sparkles className="w-4 h-4 text-secondary" />
                                            {event.tag}
                                        </span>
                                    </div>

                                    {/* Hover Overlay Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="flex items-center justify-between text-white mb-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-5 h-5" />
                                                <span className="font-semibold">{event.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-5 h-5" />
                                                <span className="font-semibold">{event.time}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-white mb-4">
                                            <MapPin className="w-5 h-5 flex-shrink-0" />
                                            <span className="font-medium">{event.location}</span>
                                        </div>

                                        <button className="w-full bg-white text-gray-900 py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-colors group/btn">
                                            Voir les détails
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                                {/* Quick Info Footer */}
                                <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                    <p className={`${event.accentColor} font-semibold mb-3`}>{event.subtitle}</p>
                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>{event.date}</span>
                                        <span className="font-bold text-lg text-gray-900">{event.price}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info CTA */}
            <section className="py-20 bg-gradient-to-br from-surface/50 to-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ne manquez aucun événement
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Inscrivez-vous à notre newsletter pour recevoir toutes les invitations et actualités
                    </p>
                    <button className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                        S'inscrire à la newsletter
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Events;