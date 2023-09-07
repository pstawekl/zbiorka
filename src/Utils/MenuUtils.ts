export interface MenuItems {
    title: string,
    classList: string,
    href: string,
    name: string,
}

export class TMenuUtils {
    public static menuItems: MenuItems[] = [
        {
            title: 'Home',
            classList: 'nav-link',
            href: '/',
            name: 'home-site'
        },
        {
            title: 'O stowarzyszeniu',
            classList: 'nav-link',
            href: '/about',
            name: 'about-site'
        },
        {
            title: 'Kontakt',
            classList: 'nav-link',
            href: '/contact',
            name: 'contact-site'
        }
    ];
}