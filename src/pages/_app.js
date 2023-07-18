import "@/styles/globals.css";
import Layout from "@/components/Layout/Layout";
import Head from "next/head";
import ShopProvider from "@/context/shopContext";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>
          Pas Pour Moi - eyewear and accessories designed for movement in the
          city
        </title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        ></meta>
        <meta
          name="description"
          content="Toronto based brand that makes eyewear and accessories designed for movement in the city."
          key="desc"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <ShopProvider>
        <Layout>
          <Component {...pageProps} key={router.asPath} />
        </Layout>
      </ShopProvider>
    </>
  );
}
