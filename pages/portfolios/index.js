import API from "../../lib/api";
import PortfolioItems from '../../components/PortfolioItems/PortfolioItems'
import useSWR from 'swr';

const fetcher = urlApi => API.get(urlApi).then(res => res.data)

const Portfolios = (props) => {

    const { data, error } = useSWR('/portfolios', fetcher, { initialData: props.portfolios })
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    // console.log(data);
    return (
        <>
           <h3>Portfolios</h3>
           <PortfolioItems portfolios={data} />
        </>
    )
}

export const getStaticProps = async () => {
    // const res = await API.get('/portfolios');
    // const portfolios = res.data;

    const portfolios = await fetcher('/portfolios')
  
    return {
      props: { portfolios },
      revalidate: 10,
    };
  }

export default Portfolios