import ReusableHero from "./ReusableHero";

const HeroSection = () => {
    return (
        <ReusableHero
            title="BIENVENUE"
            subtitle="FGBMFI-MADAGASCAR"
            description="Une communauté d'hommes d'affaires chrétiens unis dans la foi, le témoignage et le service."
            buttons={{
                primary: { label: "Rejoindre un chapitre" },
                secondary: { label: "En savoir plus" },
            }}
        />
    );
};

export default HeroSection;