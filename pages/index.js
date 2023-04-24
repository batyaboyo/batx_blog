import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Crowdnuru</title>
        <meta
          name="description"
          content="Crowdnuru is a decentralized Crowdfunding, LaunchPad, Hiring and Collaboration Platform for innovative African Developers and Investors"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
}
