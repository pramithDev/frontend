// import App from "next/app";
// import Head from "next/head";
import { createContext } from "react";
// import API from "../lib/api";
import Layout from '../components/Layout'
// import { getStrapiMedia } from "../lib/media";

import '../styles/sass/bootstrap.scss';
import '../styles/globals.scss'

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faTh, faServer, faAddressCard, faTty, faEye, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle, faCheckCircle} from '@fortawesome/free-regular-svg-icons';

config.autoAddCss = false;
library.add(faUser, faTh, faServer, faAddressCard, faTty, faEye, faPhoneAlt, faEnvelope, faTimesCircle, faCheckCircle);

export const GlobalContext = createContext({});
function MyApp({ Component, pageProps }) {
  // const { global } = pageProps;

  return (
      <>
        {/* <Head>
          <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        </Head> */}
        {/* <GlobalContext.Provider value={global}> */}
          <div className="main-App-Wrapper">
            <Layout>
                <Component {...pageProps} />
            </Layout>
          </div>
        {/* </GlobalContext.Provider> */}
      </>
  )
}

// MyApp.getInitialProps = async (appContext) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//   // Fetch global site settings from Strapi
  
//   try {
//     const res = await API.get('/global');
//     const global = res.data;
//     return { ...appProps, pageProps: { global } };
//   } catch (error) {
//     return { error };
//   }

// };

export default MyApp
