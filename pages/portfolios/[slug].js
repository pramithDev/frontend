import API from "../../lib/api";
import styles from '../../styles/Portfolio.module.scss'
import Gallery from "./gallery";
const cx = (...classNames) => classNames.join(' ');

const PortfolioItem = ({ portfolio }) => {
  ///console.log(portfolio)
    return ( 
        <div className={cx(styles.portfolios, styles.detail_item)}>
            <h3>{portfolio.projectName}</h3>

            <h5>{portfolio.workType}</h5>

            <div className={styles.tech_wrapper}>
                <h4>Used Technologies</h4>
                <ul>
                    {portfolio.defaultTech.map((item) => (
                      <li key={item.id}>{item.techText}</li>
                    ))}
                </ul>
            </div>

            {portfolio.siteLink ?
              <div className={styles.view_site_wrapper}>
                  <a className={`btn ${styles.view_site}`} href={portfolio.siteLink}
                      target="_blank" rel="noopener noreferrer">
                      View Site
                  </a>
              </div>
              :
              <div></div>
            }

            <Gallery portfolio={portfolio.images} />
        </div>
     );
}

export async function getStaticPaths() {
    const res = await API.get('/portfolios')
    const portfolios = res.data;
    
    return {
      paths: portfolios.map((portfolio) => ({
        params: {
          slug: portfolio.slug,
        },
      })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({ params }) {
    const res = await API.get('/portfolios');
    const portfolios = res.data;
  
    return {
      props: {
        // Since our slug should be unique we can use
        // it to find the post with the matching slug,
        // this will be the post we need to render
        portfolio: portfolios.find((portfolio) => portfolio.slug === params.slug ),
      },
      revalidate: 1,
    };
  }
 
export default PortfolioItem;