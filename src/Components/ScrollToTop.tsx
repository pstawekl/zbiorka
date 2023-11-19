import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
    const [visibility, setVisibility] = useState<'visible' | 'hidden'>('hidden');
    
    const handleScroll = () => {
        if (window.scrollY > 500) {
            setVisibility('visible');
        } else {
            setVisibility('hidden');
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };    
    })

    return (
        <FontAwesomeIcon 
            className={'scroll-to-top'}
            icon={faArrowUp}
            onClick={(e)=>{
                e.preventDefault();
                document.getElementsByClassName('ia-page')[0]?.scrollTo({top: 0, behavior: 'smooth'});
            }}
            visibility={visibility}
        />
    )
}