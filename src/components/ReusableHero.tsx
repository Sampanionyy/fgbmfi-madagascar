import React from "react";
import { Calendar, Globe, Info } from "lucide-react";

interface HeroProps {
    variant?: "default" | "events" | "story" | "aboutus" | "howitworks" | "join";
    title: string;
    subtitle?: string;
    description?: string;
    icon?: "calendar" | "globe" | "info" | React.ReactNode;
    gradient?: {
        from: string;
        via?: string;
        to: string;
        direction?: "br" | "r" | "t" | "b";
    };
    textColor?: string;
    centered?: boolean;
    badge?: string;
    wave?: boolean;
    buttons?: {
        primary?: { label: string; onClick?: () => void };
        secondary?: { label: string; onClick?: () => void };
    };
    className?: string;
}

const ReusableHero: React.FC<HeroProps> = ({
    variant = "default",
    title,
    subtitle,
    description,
    icon,
    gradient = {
        from: "from-primary",
        via: "via-primary/90",
        to: "to-accent",
        direction: "br",
    },
    textColor = "text-white",
    centered = false,
    badge,
    wave = true,
    buttons,
    className = "",
}) => {
    const renderIcon = () => {
        if (icon === "calendar") return <Calendar className="w-5 h-5" />;
        if (icon === "globe") return <Globe className="w-5 h-5" />;
        if (icon === "info") return <Info className="w-5 h-5" />;
        if (React.isValidElement(icon)) return icon;
        return null;
    };

    const contentAlign = centered ? "text-center mx-auto" : "text-left";

    return (
        <>
            <style>{`
                @keyframes wave1 {
                    0%, 100% {
                        d: path("M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z");
                    }
                    50% {
                        d: path("M0,48L80,53.3C160,59,320,69,480,74.7C640,80,800,80,960,74.7C1120,69,1280,59,1360,53.3L1440,48L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z");
                    }
                }
                
                @keyframes wave2 {
                    0%, 100% {
                        d: path("M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,112C1120,117,1280,107,1360,101.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z");
                    }
                    50% {
                        d: path("M0,80L80,85.3C160,91,320,101,480,96C640,91,800,69,960,64C1120,59,1280,69,1360,74.7L1440,80L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z");
                    }
                }
                
                @keyframes wave3 {
                    0%, 100% {
                        d: path("M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z");
                    }
                    50% {
                        d: path("M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,85.3C1120,96,1280,96,1360,96L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z");
                    }
                }

                .wave-animate-1 {
                    animation: wave1 8s ease-in-out infinite;
                }
                
                .wave-animate-2 {
                    animation: wave2 10s ease-in-out infinite;
                    animation-delay: -2s;
                }
                
                .wave-animate-3 {
                    animation: wave3 12s ease-in-out infinite;
                    animation-delay: -4s;
                }
            `}</style>
            
            <section
                className={`relative bg-gradient-to-${gradient.direction} ${gradient.from} ${
                    gradient.via ?? ""
                } ${gradient.to} ${textColor} overflow-hidden py-24 px-4 ${className}`}
            >
                {/* Background glow */}
                <div className="absolute inset-0 opacity-10">
                    {variant === "story" ? (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                    ) : (
                        <>
                            <div className="absolute top-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
                        </>
                    )}
                </div>

                {/* Content */}
                <div className={`relative max-w-7xl mx-auto z-10 ${centered ? "text-center" : ""}`}>
                    {/* Badge */}
                    {badge && (
                        <div
                            className={`inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-white/20 ${
                                centered ? "mx-auto" : ""
                            }`}
                        >
                            <span className="text-secondary font-semibold flex items-center gap-2 justify-center">
                                {renderIcon()}
                                {badge}
                            </span>
                        </div>
                    )}

                    {/* Title */}
                    <div className={`${contentAlign} max-w-3xl`}>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                            {title}
                            {subtitle && (
                                <span className="block text-secondary mt-2">{subtitle}</span>
                            )}
                        </h1>

                        {description && (
                            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                                {description}
                            </p>
                        )}

                        {/* Buttons */}
                        {buttons && (buttons.primary || buttons.secondary) && (
                            <div
                                className={`flex flex-col sm:flex-row gap-4 ${
                                    centered ? "justify-center" : ""
                                }`}
                            >
                                {buttons.primary && (
                                    <button
                                        onClick={buttons.primary.onClick}
                                        className="bg-secondary text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-secondary/50 transform hover:scale-105"
                                    >
                                        {buttons.primary.label}
                                    </button>
                                )}
                                {buttons.secondary && (
                                    <button
                                        onClick={buttons.secondary.onClick}
                                        className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30"
                                    >
                                        {buttons.secondary.label}
                                    </button>
                                )}
                            </div>
                        )}
                    </div>
                </div>

                {/* Animated Wave - 3 layers for depth */}
                {wave && (
                    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                        {/* Wave Layer 1 - Front */}
                        <svg 
                            viewBox="0 0 1440 120" 
                            className="w-full h-auto absolute bottom-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                className="wave-animate-1"
                                fill="#FFFFFF"
                                fillOpacity="0.8"
                                d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                            />
                        </svg>

                        {/* Wave Layer 2 - Middle */}
                        <svg 
                            viewBox="0 0 1440 120" 
                            className="w-full h-auto absolute bottom-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                className="wave-animate-2"
                                fill="#FFFFFF"
                                fillOpacity="0.5"
                                d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,112C1120,117,1280,107,1360,101.3L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                            />
                        </svg>

                        {/* Wave Layer 3 - Back */}
                        <svg 
                            viewBox="0 0 1440 120" 
                            className="w-full h-auto absolute bottom-0"
                            preserveAspectRatio="none"
                        >
                            <path
                                className="wave-animate-3"
                                fill="#FFFFFF"
                                fillOpacity="0.3"
                                d="M0,32L80,42.7C160,53,320,75,480,80C640,85,800,75,960,64C1120,53,1280,43,1360,37.3L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                            />
                        </svg>
                    </div>
                )}
            </section>
        </>
    );
};

export default ReusableHero;