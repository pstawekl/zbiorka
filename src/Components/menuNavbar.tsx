import { useEffect, useState } from 'react';
import { TMenuUtils } from '../Utils/MenuUtils';

export default function MenuNavbar() {
    return (
        <div className="menu-navbar">
            <ul className='desktop-navbar'>
                <li key={'logo'} className={'logo'}><a href="/">#BANDAŻEDLAUKRAINY</a></li>
                {TMenuUtils.menuItems.map((item) => (
                    <li key={item.name}><a className={item.classList} href={item.href}>{item.title}</a></li>
                ))}
            </ul>

            <span className='logo'><a href="/">#BANDAŻEDLAUKRAINY</a></span>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                onClick={e => {
                    e.preventDefault();
                    const burger = document.getElementsByClassName('navbar-burger')[0];
                    if (burger?.classList.contains("is-active")) {
                        burger?.classList.remove("is-active");
                    } else {
                        burger?.classList.add("is-active");
                    }
                }}>
            </a>
            <div className='navbar-burger-elements'>
                {TMenuUtils.menuItems.map((item) => (
                    <span className='navbar-burger-element'>
                        <a className={item.classList} href={item.href}>{item.title}</a>
                    </span>
                ))}
            </div>
        </div>
    )
}