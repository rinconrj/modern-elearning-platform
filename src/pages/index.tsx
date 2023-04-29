import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Demo1About1 from "../components/Demo1/Demo1About1" //"../src/components/Demo1/Demo1About1";
import Demo1About2 from "../components/Demo1/Demo1About2";
import Demo1About3 from "../components/Demo1/Demo1About3";
import Demo1Banner3 from "../components/Demo1/Demo1Banner3";
import Demo1Courses3 from "../components/Demo1/Demo1Courses3";
import Layout from "~/layout/Layout";



const Home: NextPage = () => {

  return (
    <div id="page" className="page-wrapper">
    <Layout>
      <Demo1About2 />
      <Demo1About1 />
      <Demo1Courses3 />
      <Demo1About3 />
      <Demo1Banner3 />
    </Layout>
    </div>
  );
};

export default Home;
