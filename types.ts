export interface Company {
    id: number;
    name: string;
    img: string;
    nameImg: string;
}

export interface Project {
    id: number;
    title: string;
    des: string; // Description
    img: string;
    iconLists: string[];
    link: string;
}

export interface Testimonial {
    quote: string;
    name: string;
    title: string;
}

export interface SocialMedia {
    id: number;
    img: string;
    url: string;
}
