import React from "react";
import Layout from "./Layout";
import Title from "../components/Title";
import Tech from "../components/Tech";
import Timeline from "../components/Timeline";
import Me from "../components/Me";

function About() {
  return (
    <>
      <Layout>
        <Title text="Hi I'm Ifnu Umar 👋" />
        <Me />
        <Title text="My Experience 💼" />
        <Timeline />
        <Title text="Tech Stack I Use ⌨️" />
        <Tech />
      </Layout>
    </>
  );
}

export default About;
