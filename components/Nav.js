import Link from 'next/link'
import styles from '../styles/Layout.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useRouter } from "next/router";

const Nav = () => {
    const router = useRouter();
    return ( 
        <nav>
            <ul className={styles.side_nav}>
                <li>
                    <Link href='/'>
                        <a className={router.pathname == "/" ? `${styles.selected}` : ""}>
                            <FontAwesomeIcon icon="user" size="lg" />
                            <span>About</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/portfolios'>
                        <a className={(router.pathname == "/portfolios" || router.pathname == "/portfolios/[slug]")  ? `${styles.selected}` : ""}>
                            <FontAwesomeIcon icon="th" size="lg" />
                            <span>Portfolios</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/services'>
                        <a className={router.pathname == "/services" ? `${styles.selected}` : ""}>
                            <FontAwesomeIcon icon="server" size="lg" />
                            <span>Services</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/resume'>
                        <a className={router.pathname == "/resume" ? `${styles.selected}` : ""}>
                            <FontAwesomeIcon icon="address-card" size="lg" />
                            <span>Resume</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href='/contact'>
                        <a className={router.pathname == "/contact" ? `${styles.selected}` : ""}>
                            <FontAwesomeIcon icon="tty" size="lg" />
                            <span>Contact</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;