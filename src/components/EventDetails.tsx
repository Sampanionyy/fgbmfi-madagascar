import { Calendar, MapPin, Clock, Mail, Phone, Users, ArrowLeft, Ticket, Share2, Heart } from 'lucide-react';
import { eventsData } from '../data/event-data';
import { useNavigate, useParams } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams();
    const event = eventsData.find(e => e.id === id);
    const navigate = useNavigate()

    if (!event) {
        return <div>Événement non trouvé</div>;
    }

    const handleBack = () => {
        navigate('/events');
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-surface/30">
            {/* Back Button */}
            <div className="bg-white border-b sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    <button
                        onClick={handleBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Retour aux événements</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Left Content - Details */}
                    <div className="lg:col-span-3 space-y-8">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`inline-flex items-center gap-2 bg-gradient-to-r ${event.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                                    {event.tag}
                                </span>
                                {event.placesLimited && (
                                    <span className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold">
                                        Places limitées
                                    </span>
                                )}
                            </div>

                            <h1 className="text-5xl font-bold text-gray-900 mb-3">{event.title}</h1>
                            <p className={`text-2xl ${event.accentColor} font-semibold mb-6`}>{event.subtitle}</p>

                            {/* Theme Card */}
                            <div className={`bg-gradient-to-br ${event.color} p-8 rounded-2xl text-white mb-8`}>
                                <div className="text-secondary text-sm font-bold mb-3">THÈME DE L'ÉVÉNEMENT</div>
                                <h2 className="text-3xl font-bold mb-4">{event.theme}</h2>
                                {event.quote && (
                                    <p className="text-white/90 italic text-lg leading-relaxed border-l-4 border-white/30 pl-4">
                                        {event.quote}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Description */}
                        {event.description && (
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">À propos de cet événement</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">{event.description}</p>
                            </div>
                        )}

                        {/* Key Info Cards */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-primary">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Calendar className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-medium mb-1">Date & Heure</div>
                                        <div className="font-bold text-gray-900">{event.date}</div>
                                        <div className="text-gray-700">{event.time}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-accent">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-medium mb-1">Lieu</div>
                                        <div className="font-bold text-gray-900">{event.location}</div>
                                        <div className="text-gray-700">{event.address}</div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-secondary">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Ticket className="w-6 h-6 text-secondary" />
                                    </div>
                                    <div>
                                        <div className="text-sm text-gray-500 font-medium mb-1">Tarif</div>
                                        <div className="font-bold text-gray-900 text-2xl">{event.price}</div>
                                        {event.rsvp && (
                                            <div className="text-sm text-gray-600 mt-1">RSVP {event.rsvp}</div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {event.bonus && (
                                <div className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-pink-500">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Users className="w-6 h-6 text-pink-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 font-medium mb-1">Bonus</div>
                                            <div className="font-bold text-gray-900">{event.bonus}</div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                Contact & Inscription
                            </h3>

                            <div className="space-y-4">
                                {event.contact.email && (
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Email</div>
                                            <a href={`mailto:${event.contact.email}`} className="text-primary hover:text-primary/80 font-medium">
                                                {event.contact.email}
                                            </a>
                                        </div>
                                    </div>
                                )}

                                {event.contact.phone && event.contact.phone.length > 0 && (
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <div className="text-sm text-gray-500 mb-1">Téléphone</div>
                                            <div className="space-y-1">
                                                {event.contact.phone.map((phone, index) => (
                                                    <a
                                                        key={index}
                                                        href={`tel:${phone.replace(/\s/g, '')}`}
                                                        className="block text-primary hover:text-primary/80 font-medium"
                                                    >
                                                        {phone}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {event.contact.note && (
                                    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                                        <p className="text-gray-700">{event.contact.note}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Image & Actions */}
                    <div className="lg:col-span-2">
                        <div className="sticky top-28 space-y-6">
                            {/* Event Image */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        e.currentTarget.src = 'https://placehold.co/600x800/2C5F7F/FFFFFF?text=FGBMFI+Event';
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 text-white">
                                        <Clock className="w-5 h-5" />
                                        <span className="font-medium">{event.time}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <button className={`w-full bg-gradient-to-r ${event.color} text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3`}>
                                    <Ticket className="w-6 h-6" />
                                    S'inscrire maintenant
                                </button>                                
                            </div>

                            {/* Quick Info */}
                            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 border-2 border-primary/10">
                                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Informations importantes
                                </h4>
                                <ul className="space-y-3 text-sm text-gray-700">
                                    {event.placesLimited && (
                                        <li className="flex items-start gap-2">
                                            <span className="text-red-500 mt-0.5">●</span>
                                            <span>Places limitées - Inscription obligatoire</span>
                                        </li>
                                    )}
                                    {event.rsvp && (
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-0.5">●</span>
                                            <span>Confirmation requise avant le {event.rsvp}</span>
                                        </li>
                                    )}
                                    <li className="flex items-start gap-2">
                                        <span className="text-primary mt-0.5">●</span>
                                        <span>Événement ouvert à tous</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-secondary mt-0.5">●</span>
                                        <span>Repas et boissons inclus</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;