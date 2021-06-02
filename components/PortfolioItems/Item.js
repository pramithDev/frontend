import Link from "next/link";
import { Button, Col } from 'reactstrap';
import Image from "../image";
import styles from '../../styles/Portfolio.module.scss'

const Item = ({ portfolios }) => {
    //console.log(portfolios);
    return (
        <>
            {portfolios.map((item) => (
                <Col className={styles.block} xs="auto" sm="6" md="4" xl="3" key={item.id}>
                    <Link href={`/portfolios/${item.slug}`} >
                        <a>
                            <Image 
                                image={item.thumb} 
                                style={{
                                    borderRadius: 10,
                                    maxWidth: "100%",
                                    height: "auto"
                                }}
                            />
                            <div className={styles.text_block}>
                                <p className={styles.name}>{item.projectName}</p>
                                <div className={styles.hovered}>
                                    <p className={styles.item_type}>{item.workType}</p>
                                    <Button className={styles.btn_project}>View Project →</Button>
                                </div>
                            </div>
                            <div className={styles.overlay}></div>
                        </a>
                    </Link>
                </Col>
            ))}
        </>
     );
}
 
export default Item;