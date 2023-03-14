import API from "../lib/api";
import Head from "next/head";
import styles from '../styles/Contact.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import { useForm, ValidationError } from "@formspree/react";

const Contact = ({contact}) => {
    const [state, handleSubmit] = useForm("xvolwodj");
    
    const resetForm = () =>{
        if (typeof window !== "undefined") {
            document.getElementById("contact-form").reset();
        }
    };

    return ( 
        <>
            <Head>
                <title>Contact - PRAMITHDEV</title>
            </Head>
            <h3>Contact Us</h3>
            <div className={styles.contact_wrapper}>
                <p>{contact.description}</p>

                <div className={styles.contact_item}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon="phone-alt" size="lg" />
                    </span>
                    <span className={styles.text}>
                        {contact.telNo}
                    </span>
                </div>

                <div className={styles.contact_item}>
                    <span className={styles.icon}>
                        <FontAwesomeIcon icon="envelope" size="lg" />
                    </span>
                    <span className={styles.text}>
                        {contact.email}
                    </span>
                </div>
                <Form id="contact-form" className={styles.contact_form} onSubmit={handleSubmit}>
                    <FormGroup>
                        <Input id="name" type="text" name="name" placeholder="Enter Name" required/>
                        <p><ValidationError prefix="Name" field="name" errors={state.errors} /></p>
                    </FormGroup>
                    <FormGroup>
                        <Input id="email" type="email" name="email" placeholder="Enter Email" required />
                        <p><ValidationError prefix="Email" field="email" errors={state.errors} /></p>
                    </FormGroup>
                    <FormGroup>
                        <Input  id="subject" type="text" name="subject"  placeholder="Enter Subject" required />
                        <p><ValidationError prefix="Subject" field="subject" errors={state.errors} /></p>
                    </FormGroup>
                    <FormGroup>
                        <Input type="textarea" rows="6" id="message" name="message" placeholder="Enter Message" required></Input>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </FormGroup>

                    <div className={styles.btn_block}>
                        <Button type="submit" className={styles.send} disabled={state.submitting}>
                            Send
                        </Button>
                        <Button className={styles.download_btn} onClick={resetForm}>Cancel</Button>
                    </div>
                    {/* <ValidationError errors={state.errors} /> */}
                    {/* {state.errors ? 
                        <div className={styles.msg_wrapper}>
                            <h5 className="d-flex align-items-center"><FontAwesomeIcon className="m-0 mr-3" icon={["far", "times-circle"]} color="#f27474"/> Failed your submission!</h5>
                            {resetForm()}
                        </div>
                        :
                        <div>vcbcvb</div>
                    } */}

                    {state.succeeded ? 
                        <div className={styles.msg_wrapper}>
                            <h5 className="d-flex align-items-center"><FontAwesomeIcon className="m-0 mr-3" icon={["far", "check-circle"]} color="#a5dc86"/> Thanks for your submission!</h5>
                            {resetForm()}
                        </div>
                        :
                        <div></div>
                    }
                </Form>
            </div>
        </>
     );
}

export const getStaticProps = async () => {
    const res = await API.get('/contact')
    const contact = res.data;
    
    return {
      props: { contact },
      revalidate: 1,
    };
}
 
export default Contact;