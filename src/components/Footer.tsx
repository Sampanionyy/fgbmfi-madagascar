import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

const Footer = () => {
    const footerLinks: Record<string, { name: string; href: string }[]> = {
        "À propos": [
            { name: "Notre histoire", href: "/story" },
            { name: "Notre mission", href: "/about-us" },
            { name: "Témoignages", href: "/testimony" },
        ],
        "Chapitres": [
            { name: "Trouver un chapitre", href: "/chapters" },
            { name: "Événements", href: "/events" },
        ],
        "Communauté": [
            { name: "Devenir membre", href: "/register" },
        ],
    };

    return (
        <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-5 gap-12 mb-12">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center mb-4">
                            <img src="/fbg-logo.png" alt="FGBMFI Logo" className="w-10 h-10 mr-3" />
                            <div className="ml-3">
                                <div className="text-white font-bold">FGBMFI-MADAGASCAR</div>
                                <div className="text-secondary text-xs">Full Gospel Business Men</div>
                            </div>
                        </div>
                        <p className="text-gray-400 mb-6">
                            Une communauté mondiale d'hommes d'affaires chrétiens unis dans la foi et le témoignage.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="font-bold text-lg mb-4 text-secondary">{category}</h3>
                            <ul className="space-y-2">
                                {links.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link.href}
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-700 pt-8 mb-8">
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-secondary" />
                            <span className="text-gray-400">Antananarivo, Madagascar</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-secondary" />
                            <span className="text-gray-400">fgbmfi.madagascar@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-secondary" />
                            <span className="text-gray-400">+261 34 00 343 48</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © 2025 FGBMFI-MADAGASCAR. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
