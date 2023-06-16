import { Provider } from 'react-redux';
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

import ReduxStore from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sky Dunk HoopFest</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The Baller Club Edition 🎬🍾 | Monday December 26th"
        />

        {/* <!-- Google / Search Engine Tags --> */}
        <meta itemProp="name" content="⬛ Return of The All Black Affair ⬛" />
        <meta
          itemProp="description"
          content="The Baller Club Edition 🎬🍾 | Monday December 26th"
        />
        <meta itemProp="image" content="/flyer.png" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://www.returnofblackaffair.com/event-tickets"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="⬛ Return of The Black Affair ⬛" />
        <meta
          property="og:description"
          content="The Baller Club Edition 🎬🍾 | Monday December 26th"
        />
        <meta property="og:image" content="/flyer.png" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="⬛ Return of The Black Affair ⬛" />
        <meta
          name="twitter:description"
          content="The Baller Club Edition 🎬🍾 | Monday December 26th"
        />
        <meta name="twitter:image" content="/flyer.png" />
      </Head>
      <Provider store={ReduxStore}>
        {/* <Header /> */}
        <Component {...pageProps} />
        {/* <Footer /> */}
      </Provider>
    </>
  );
}

export default MyApp;
