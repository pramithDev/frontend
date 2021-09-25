import Link from 'next/link'
import styles from '../styles/Layout.module.scss'
import Image from "./image";
import { useContext, useState, useEffect } from "react";

import { GlobalContext } from '../pages/_app'

const cx = (...classNames) => classNames.join(' ');

const Header = () => {
    const global = useContext(GlobalContext);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        document.addEventListener("scroll", () => {
        const scrollCheck = window.scrollY > 100
        if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
        }
        })
    })
    
    return ( 
        <div className={scroll ?  (cx(styles.top_header, styles.up)) : (cx(styles.top_header, styles.down)) }>
            <div className={styles.logo_wrapper}>
                <Link href='/'>
                    <a>
                        <Image image={global.logo}  alt="PRAMITHDEV LOGO"/>
                    </a>
                </Link>
            </div>
            <div className={styles.social_wrapper}>
                <ul>
                    {global.social_medias.map((item) => (
                        <li key = {item.id}>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <Image image={item.icon} alt="SOCIAL MEDIAS" />
                        </a>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
     );
}

export default Header;