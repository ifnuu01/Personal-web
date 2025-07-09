import Layout from "./Layout";
import Title from "../components/Title";
import Card from "../components/Card";
import Certif from "../components/Certif";

function Projects() {
  return (
    <>
      <Layout>
        <Title text="Projects I've Worked On 🚀" />
        <Card />
        <Title text="My Certifications 📜" />
        <Certif />
      </Layout>
    </>
  );
}

export default Projects;
