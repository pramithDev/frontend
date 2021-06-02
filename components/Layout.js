import Nav from './Nav'
import styles from '../styles/Layout.module.scss'
import Header from './Header'

const Layout = ({children}) => {
    return ( 
        <>
            <div className={styles.Side_nav_main}>
                <Nav/>
            </div>

            <div className={`${styles.main_container} p-0 container-fluid`}>
                <main className={styles.main_layout}>
                    <div className={styles.main_wrapper_social_name}>
                        <Header/>
                    </div>
                    <div className={styles.page_content_wrapper}>
                        <div className={styles.page_content}>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </>
     );
}
 
export default Layout;