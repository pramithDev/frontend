import API from "../lib/api";
import styles from '../styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormGroup, Input, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from "react";
import Image from 'next/image'

const Contact = ({contactData}) => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        message: '',
    });

    // const { name, email, message } = values;
    const [errorContactForm, setErrorContactForm] = useState(null);
    const [modal, setModal] = useState(false);
    const [successForm, setSuccessForm] = useState(false);

    const handleInputChange = (event) => {
        setValues((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await API.post(`/inquires`, values)
            .then((response) => {
                if (response.status === 200){
                    resetForm();
                    setModal(true);
                    setSuccessForm(true);
                }
            });
        } catch (error) {
            setErrorContactForm(error);
            resetForm();
            setModal(true);
            setSuccessForm(false);
        }
    }

    const resetForm = () =>{
        setValues({ name: "", email: "", message: "" });
    };

    const toggle = () => setModal(!modal);

    return ( 
        <>
            <h3>Contact Us</h3>
            <div className={styles.contact_wrapper}>
                <p>{contactData.description}</p>

                <div className={styles.contact_item}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon="phone-alt" size="lg" />
                    </span>
                    <span className={styles.text}>
                        {contactData.telNo}
                    </span>
                </div>

                <div className={styles.contact_item}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon="envelope" size="lg" />
                    </span>
                    <span className={styles.text}>
                        {contactData.email}
                    </span>
                </div>

                <Form className={styles.contact_form} onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input type="text" placeholder="Enter Name" 
                            name="name"
                            value={values.name} 
                            onChange={handleInputChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="email" placeholder="Enter Email" 
                            name="email"
                            value={values.email} 
                            onChange={handleInputChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" rows="6" placeholder="Enter Message" 
                            name="message"
                            value={values.message} 
                            onChange={handleInputChange} 
                        />
                    </FormGroup>
                    <div className={styles.btn_block}>
                        <Button className={styles.send} type="submit" disabled={!(values.email && values.name && values.message )} >Send</Button>
                        <Button className={styles.download_btn} disabled={!(values.email || values.name || values.message )} onClick={resetForm}>Cancel</Button>
                    </div>
                </Form>
            </div>
            <Modal isOpen={modal} className="contact_form_modal modal-dialog-centered">
                <ModalBody>
                    {successForm ?
                        <div className={styles.msg_wrapper}>
                            <Image src="/images/success.PNG" alt="Success" width={90} height={80} />
                            <h3>Send Successfully!</h3>
                        </div>
                        :
                        <div className={styles.msg_wrapper}>
                            <Image src="/images/fail.PNG" alt="Fail" width={90} height={80} />
                            <h3>Send Failed!</h3>
                        </div>
                    }
                </ModalBody>
                <ModalFooter>
                    <Button color="primary contact-modal-btn" onClick={toggle}>OK</Button>{' '}
                </ModalFooter>
            </Modal>
        </>
     );
}

export const getStaticProps = async () => {
    const res = await API.get('/contact')
    const contactData = res.data;
    
    return {
      props: { contactData },
      revalidate: 10,
    };
}
 
export default Contact;