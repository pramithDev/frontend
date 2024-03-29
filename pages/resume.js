import API from "../lib/api";
import Head from "next/head";
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/Resume.module.scss'
import Moment from "react-moment";

const Resume = ({resumes}) => {
    return ( 
        <>
            <Head>
                <title>Resume - PRAMITHDEV</title>
            </Head>
            <h3>Resume</h3>
            <Container fluid={true} className={styles.main_resume_wrapper}>
                <Row>
                    <Col xl="8" className={styles.resume_wrapper}>
                        {resumes.map((resume) => {
                            return(
                                <div className={styles.resume_item} key={resume.id}>
                                    <h5>{resume.companyName}</h5>
                                    <p className={styles.duration_post}>
                                        <span><Moment format="MMM YYYY">{resume.startDate}</Moment> - {(resume.endDate == null ) ? 'Present' : <Moment format="MMM YYYY">{resume.endDate}</Moment>  } </span>  &nbsp; : &nbsp; {resume.post}
                                    </p>
                                    <p>{resume.description}</p>
                                    <ul className={styles.list}>
                                        {resume.defaultTask.map((list) => (
                                            <li key={list.id}>{list.taskText}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        </>
     );
}

export const getStaticProps = async () => {
    const res = await API.get('/resumes?_sort=id:DESC')
    const resumes = res.data;

    return {
      props: { resumes },
      revalidate: 1,
    };
}
 
export default Resume;