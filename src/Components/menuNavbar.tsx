import { TMenuUtils } from '../Utils/MenuUtils';

export default function MenuNavbar() {
    return (
        <div className="menu-navbar">
            <ul>
                <li key={'logo'} className={'logo'}><a href="/">LOGO</a></li>
                {TMenuUtils.menuItems.map((item) => (
                    <li key={item.name}><a className={item.classList} href={item.href}>{item.title}</a></li>
                ))}
            </ul>
        </div>
    )
}