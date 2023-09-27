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

    //write function whose change background color of menu div on scroll event
    public static changeMenuBackgroundOnScroll() {
        const menu = document.getElementsByClassName('menu-navbar')[0];
        const menuItems = document.getElementsByClassName('nav-link');
        const menuItemsArray = Array.from(menuItems);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                menu.classList.add('menu-scroll');
                menuItemsArray.forEach((item) => {
                    item.classList.add('menu-scroll');
                });
            } else {
                menu.classList.remove('menu-scroll');
                menuItemsArray.forEach((item) => {
                    item.classList.remove('menu-scroll');
                });
            }
        });
    }

}