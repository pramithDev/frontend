import API from "../../lib/api";
import PortfolioItems from '../../components/PortfolioItems/PortfolioItems'

const Portfolios = ({ portfolios }) => {
    return (
        <>
           <h3>Portfolios</h3>
           <PortfolioItems portfolios={portfolios} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await API.get('/portfolios');
    const portfolios = res.data;
  
    return {
      props: { portfolios },
      revalidate: 1,
    };
  }

export default Portfolios