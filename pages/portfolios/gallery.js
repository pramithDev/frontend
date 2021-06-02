import {Modal, ModalHeader, ModalBody, Button, Col, Container, Row} from 'reactstrap';
import styles from '../../styles/Portfolio.module.scss'
import Image from "../../components/image";
import { useState } from "react";

const cx = (...classNames) => classNames.join(' ');

const Gallery = ({portfolio}) => {
    const [modal, setModal] = useState(false);
    const toggle = item => setModal(item.id);

    return ( 
        <Container fluid={true} className="p-0">
            <Row className={styles.grid_image_wrapper}>
                {portfolio.map((item) => (
                <Col sm="6" lg="6" key={item.id}>
                    <div className={styles.grid_image}>
                        <Image 
                            image={item} 
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }}
                        />

                        <div className={styles.overlay} onClick={() => toggle(item)}>
                            <Button className={styles.btn_project}>View →</Button>
                        </div>

                        <Modal isOpen={modal === item.id} toggle={toggle} className={`${cx(styles.portfolio_modal, styles.modal_xl)} modal-xl portfolio-detail-image`}>
                            <ModalHeader className={styles.modal_header} toggle={toggle}>{item.name}</ModalHeader>
                            <ModalBody className={styles.modal_body}>
                                <Image 
                                    image={item} 
                                    style={{
                                        maxWidth: "100%",
                                        height: "auto"
                                    }}
                                />
                            </ModalBody>
                        </Modal>
                    </div>
                </Col>
                ))}
            </Row>
        </Container>
     );
}
 
export default Gallery;