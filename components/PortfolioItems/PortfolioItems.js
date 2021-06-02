import Item from "./Item";
import { Container, Row } from 'reactstrap';
import styles from '../../styles/Portfolio.module.scss'

const Portfolio = ({portfolios}) => {
    return ( 
        <>
            <Container fluid={true}>
                <Row className={styles.portfolio_items}>
                    <Item portfolios={portfolios} />
                </Row>
            </Container>
        </>
     );
}
 
export default Portfolio;