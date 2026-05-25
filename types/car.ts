export type CarsCardProps = {
    id: number;
    name: string;
    brand: string;
    images: string[];
    category: string;
    price: number;
    year: number;
    warranty: boolean;
    odo: number;
    desc_title: string;
    desc: string[];
    source: string;
    sourcea: string;
    spec: {
        engine: string;
        hp: number;
        top_speed: number;
        transmision: string;
        body: string;
        exterior: string;
        interior: string;
    }
}