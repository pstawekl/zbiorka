import { useEffect, useState } from 'react';
import { TMenuUtils } from '../Utils/MenuUtils';

export default function MenuNavbar() {
    const [style, setStyle] = useState({} as React.CSSProperties);

    onscroll = function () {
        let scroll_pos: number | undefined = 0;
        $(".ia-page").scroll(function () {
            scroll_pos = $(this)?.scrollTop();
            if (scroll_pos != null && scroll_pos > 10) {
                setStyle({backgroundColor: '#037bfc'})
            } else {
                setStyle({backgroundColor: 'transparent'})
            }
        });
        console.log(scroll_pos);
    };


    return (
        <div className="menu-navbar" style={style}>
            <ul>
                <li key={'logo'} className={'logo'}><a href="/">LOGO</a></li>
                {TMenuUtils.menuItems.map((item) => (
                    <li key={item.name}><a className={item.classList} href={item.href}>{item.title}</a></li>
                ))}
            </ul>
        </div>
    )
}