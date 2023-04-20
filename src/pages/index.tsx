import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
import Header from "~/components/Header/Header";
import Banner from "~/components/Banner/Banner";



const Home: NextPage = () => {

  const {data} = api.courses.getAll.useQuery()

  return (
    <div id="page" className="page-wrapper">
      <Header/>
      <Banner/>
    </div>
  );
};

export default Home;
