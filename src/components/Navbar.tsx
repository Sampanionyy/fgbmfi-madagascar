import { ChevronDown, Facebook, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface DropdownLink {
    label: string;
    href: string;
}

interface NavItem {
    label: string;
    hasDropdown: boolean;
    dropdownLinks?: DropdownLink[];
    href?: string;
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: NavItem[] = [
        {
            label: 'A propos de nous',
            hasDropdown: true,
            dropdownLinks: [
                { label: 'Evènements', href: '/events' },
                { label: 'Notre Histoire', href: '/story' },
                { label: 'Qui sommes-nous ?', href: '/about-us' },
                { label: 'Comment ça marche ?', href: '/how-it-works' },
            ]
        },
        {
            label: 'A découvrir',
            hasDropdown: true,
            dropdownLinks: [
                { label: 'Ecole de La Vision', href: '/ecole-de-la-vision' },
                { label: 'FGBMFI Ladies', href: '/fgbmfi-ladies' },
            ]
        },
        { label: 'Devenir membre', hasDropdown: false, href: '/join-us' },
    ];

    return (
        <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link className="flex items-center" to="/">
                        <img src="/fbg-logo.png" alt="FGBMFI Logo" className="w-10 h-10 mr-3" />
                        <div className="ml-3">
                            <div className="text-primary font-bold text-lg">FGBMFI</div>
                            <div className="text-accent text-xs font-semibold">MADAGASCAR</div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item, idx) => (
                            <div key={idx} className="relative group">
                                {item.hasDropdown ? (
                                    <>
                                        <button className="flex items-center gap-1 text-gray-700 hover:text-primary font-medium transition-colors py-2">
                                            {item.label}
                                            <ChevronDown className="w-4 h-4" />
                                        </button>
                                        {item.dropdownLinks && (
                                            <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2">
                                                {item.dropdownLinks.map((link, i) => (
                                                    <Link key={i} to={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white transition-colors">
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link to={item.href || '#'} className="text-gray-700 hover:text-primary font-medium transition-colors py-2">
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Social & Actions */}
                    <div className="hidden md:flex items-center gap-4">
                       <a 
                            href="https://www.facebook.com/profile.php?id=100076470345665" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-gray-600 hover:text-primary transition-colors"
                        >
                            <Facebook className="w-5 h-5" />
                        </a>
                        <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            Voir nos témoignages
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-4 py-6 space-y-4">
                        {navItems.map((item, idx) => (
                            <div key={idx}>
                                {item.hasDropdown ? (
                                    <>
                                        <a href="#" className="block text-gray-700 hover:text-primary font-medium">
                                            {item.label}
                                        </a>
                                        {item.dropdownLinks && (
                                            <div className="pl-4 mt-2 space-y-1">
                                                {item.dropdownLinks.map((link, i) => (
                                                    <Link key={i} to={link.href} className="block text-sm text-gray-600 hover:text-primary">
                                                        {link.label}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link to={item.href || '#'} className="block text-gray-700 hover:text-primary font-medium">
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <button className="w-full bg-primary text-white px-6 py-3 rounded-full font-medium">
                            Voir nos témoignages
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;