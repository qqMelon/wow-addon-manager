export interface User {
    name: string;
    email: string;
    imageUrl: string;
};

export interface Navigation {
    name: string;
    href: string;
    current: boolean;
};

export interface UserNavigation {
    name: string;
    href: string;
};