export interface IEvent {
    id: string;
    title: string;
    subtitle: string;
    theme: string;
    quote?: string;
    date: string;
    time: string;
    location: string;
    address: string;
    price: string;
    rsvp?: string;
    bonus?: string;
    placesLimited?: boolean;
    contact: {
        email?: string;
        phone?: string[];
        note?: string;
    };
    image: string;
    tag: string;
    color: string;
    accentColor: string;
    description?: string;
}
