import react from 'react';
import { TMenuUtils } from '../Utils/MenuUtils';

export default function MenuNavbar() {
    return (
        <ul>
            {TMenuUtils.menuItems.map((item) => (
                <li key={item.name} className={item.classList}><a href={item.href}>{item.title}</a></li>
            ))}
        </ul>
    )
}