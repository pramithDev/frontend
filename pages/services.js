import API from "../lib/api";
import { Container, Row, Col } from 'reactstrap';
import Image from "../components/image";
import styles from '../styles/Service.module.scss'

const Services = ({services}) => {
    return ( 
        <>
           <h3>Services</h3>
           <Container fluid={true} className={styles.services_wrapper_container}>
                <Row className={styles.services_wrapper}>
                    {services.map((service) => {
                        return(
                            <Col xl="6" className={styles.service_item_wrapper} key={service.id}>
                                <div className={styles.service_item}>
                                    <span>
                                        <Image image={service.image} />
                                    </span>
                                    <div className={styles.content}>
                                        <h5>{service.title}</h5>
                                        <p>
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })}
                </Row>
            </Container>  
        </>
     );
}

export const getStaticProps = async () => {
    const res = await API.get('/services')
    const services = res.data;

    return {
      props: { services },
      revalidate: 10,
    };
}
 
export default Services;