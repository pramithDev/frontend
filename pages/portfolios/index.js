import API from "../../lib/api";
import Head from "next/head";
import PortfolioItems from '../../components/PortfolioItems/PortfolioItems'

const Portfolios = ({portfolios}) => {
    // console.log(data);
    return (
        <>
            <Head>
                <title>Portfolios - PRAMITHDEV</title>
            </Head>
            <h3>Portfolios</h3>
            <PortfolioItems portfolios={portfolios} />
        </>
    )
}

export const getStaticProps = async () => {
    const res = await API.get('/portfolios?_sort=id:DESC');
    const portfolios = res.data;
  
    return {
      props: { portfolios },
      revalidate: 1,
    };
  }

export default Portfolios