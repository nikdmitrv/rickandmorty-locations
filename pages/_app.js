import Layout from "../components/Layout";
import withApollo from "../lib/apollo";
import { getDataFromTree } from "@apollo/react-ssr";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";

const app = ({ Component, pageProps }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Rick and Morty Book</title>
        <link href="/style/app.css" rel="stylesheet" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Layout>
          <Component {...pageProps} key={router.route} />
        </Layout>
      </AnimatePresence>
    </>
  );
};

export default withApollo(app, { getDataFromTree });
