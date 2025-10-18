import React from "react";
import { Calendar, Globe } from "lucide-react";

interface HeroProps {
    variant?: "default" | "events" | "story";
    title: string;
    subtitle?: string;
    description?: string;
    icon?: "calendar" | "globe" | React.ReactNode;
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
        if (React.isValidElement(icon)) return icon;
        return null;
    };

    const contentAlign = centered ? "text-center mx-auto" : "text-left";

    return (
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

            {/* Optional wave */}
            {wave && (
                <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 1440 120" className="w-full h-auto">
                        <path
                            fill="#FFFFFF"
                            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                        ></path>
                    </svg>
                </div>
            )}
        </section>
    );
};

export default ReusableHero;
