// import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import API from "../lib/api";
import { Row, Col, Container, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from "../components/image";

export default function Home({about}) {
  // console.log(about.aboutImage);
  return (
    <>
      <div className={styles.name_post_wrapper}>
          <h1><span>I&apos;m </span>{about.name}</h1>
          <p className={styles.title_post}>{about.postTitle}</p>
      </div>
      <Container fluid={true}>
          <Row>
              <Col md="6" xl="6" className="p-0">
                <h3>About Me</h3>
                
                {/* <div className={styles.about_text_wrapper} dangerouslySetInnerHTML={{ __html: about.aboutText }}></div> */}
                <div className={styles.about_text}>{about.aboutText}</div>
             
                <a className="cv-bt" href={about.cv.url} target="_blank" rel="noopener noreferrer">
                    <Button className={styles.download_btn}>
                      <FontAwesomeIcon icon="eye" size="lg" className="mr-2" />
                        View CV
                    </Button>
                </a>
              </Col>
              <Col md="6" xl="6" className="p-0">
                  <div className={styles.image_wrapper}>
                    <Image image={about.aboutImage} alt="About Image" />
                    {/* <Image image={process.env.API_BASE_URL + about.aboutImage.provider_metadata.public_id} /> */}
                  </div>
              </Col>
          </Row>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  const res = await API.get("/about");
  const about = await res.data;

  return {
    props: { 
      about
    },
    revalidate: 1,
  };
}
