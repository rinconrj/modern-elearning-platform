import React from "react";
import Demo1About1 from "../components/Demo1/Demo1About1" //"../src/components/Demo1/Demo1About1";
import Demo1About2 from "../components/Demo1/Demo1About2";
import Demo1About3 from "../components/Demo1/Demo1About3";
import Demo1Banner3 from "../components/Demo1/Demo1Banner3";
import Demo1Courses3 from "../components/Demo1/Demo1Courses3";
import Layout from "~/layout/Layout";
const demo1 = () => {
  return (
    <Layout>
      <Demo1About2 />
      <Demo1About1 />
      <Demo1Courses3 />
      <Demo1About3 />
      <Demo1Banner3 />
    </Layout>
  );
};

export default demo1;
