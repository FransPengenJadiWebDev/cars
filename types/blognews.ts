export type BlogPost = {
    id: number;
    title: string;
    excerpt: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    featured?: boolean;
}

export type NewsPost = {
    id: string;
    title: string;
    excerpt: string;
    category: string;
    timestamp: string;
    image: string;
    isBreaking?: boolean;
}
