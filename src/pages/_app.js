// pages/_app.js
import Layout from "../components/common/Layout";
import "../app/globals.css"; // Import global styles


function MyApp({ Component, pageProps }) {
    return (
        <Layout>
        <Component {...pageProps} />
    </Layout>
    );
}

export default MyApp;
