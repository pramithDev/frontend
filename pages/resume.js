import API from "../lib/api";
import { Container, Row, Col } from 'reactstrap';
import styles from '../styles/Resume.module.scss'
import Moment from "react-moment";
import useSWR from 'swr';

const fetcher = urlApi => API.get(urlApi).then(res => res.data)

const Resume = (props) => {
    
    const { data, error } = useSWR('/resumes', fetcher, { initialData: props.resumes })
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    return ( 
        <>
            <h3>Resume</h3>
            <Container fluid={true} className={styles.main_resume_wrapper}>
                <Row>
                    <Col xl="8" className={styles.resume_wrapper}>
                        {data.map((resume) => {
                            return(
                                <div className={styles.resume_item} key={resume.id}>
                                    <h5>{resume.companyName}</h5>
                                    <p className={styles.duration_post}>
                                        <Moment format="MMM YYYY">{resume.startDate}</Moment> - <Moment format="MMM YYYY">{resume.endDate}</Moment> : {resume.post}
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
    // const res = await API.get('/resumes')
    // const resumes = res.data;
  
    const resumes = await fetcher('/resumes')
    // return { props: { posts } }

    return {
      props: { resumes },
      revalidate: 10,
    };
}
 
export default Resume;