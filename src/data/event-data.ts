import type { IEvent } from "../types/interfaces";

export const eventsData: IEvent[] = [
    {
        id: "1",
        title: "Business Break Fraternel",
        subtitle: "IKIANJA CHAPTER",
        theme: "BÂTIR AVEC FOI & VISION",
        date: "Jeudi 23 Octobre 2025",
        time: "À 15 heures",
        location: "Restaurant Hybride IKianja",
        address: "Ambohimangakely (Trano tokana)",
        price: "15 000 Ar",
        rsvp: "avant le 22/10/2025 à 12h",
        contact: {
            email: "fgbmfi.madagascar@gmail.com",
            phone: ["034 00 343 48", "033 79 70 289"]
        },
        image: "/business-break-ikianja.jpg",
        tag: "INVITATION SPÉCIALE",
        color: "from-accent to-accent/80",
        accentColor: "text-accent",
        description: "Un moment privilégié de communion fraternelle autour d'un repas, pour échanger sur la foi et les affaires dans un cadre convivial."
    },
    {
        id: "2",
        title: "L'Entrepreneuriat Féminin",
        subtitle: "LADIES MADAGASCAR",
        theme: "Plus qu'un Business, une Mission",
        quote: "Quand une femme entreprend, elle ne bâtit pas seulement une entreprise, elle bâtit des vies, une génération et une nation.",
        date: "01 Novembre 2025",
        time: "À 9h",
        location: "Utopia by Sooatel",
        address: "À 67H",
        price: "20 000 Ar",
        bonus: "Réseautage",
        placesLimited: true,
        contact: {
            note: "Inscrivez-vous : MP, WhatsApp ou auprès des membres de FGBMFI"
        },
        image: "/ladies-entrepreneuriat.jpg",
        tag: "PLACES LIMITÉES",
        color: "from-pink-500 to-pink-600",
        accentColor: "text-pink-500",
        description: "Une journée dédiée aux femmes entrepreneures, avec des témoignages inspirants et des opportunités de réseautage professionnel."
    }
];