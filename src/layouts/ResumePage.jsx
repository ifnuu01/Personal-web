import React from "react";
import Layout from "./Layout";
import Resume from "../components/Resume";
import Title from "../components/Title";

function ResumePage() {
  return (
    <>
      <Layout>
        <Title text="My Resume 📄" />
        <Resume />
      </Layout>
    </>
  );
}

export default ResumePage;
