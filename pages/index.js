import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Service from "../components/Service";
import Testimonials from "../components/Testimonials";
import { data } from "../data";
import styles from "../styles/Home.module.css";

export default function Home( { services } ) {

  return (
    <>
      <Head>
        <title>AGENCY WEBSITE</title>
      </Head>

      <Hero />
      <Service services={services} />
      <Testimonials />
    </>
  );
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  }
}