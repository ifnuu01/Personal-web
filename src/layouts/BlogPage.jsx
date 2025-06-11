import React from "react";
import Layout from "./Layout";
import Title from "../components/Title";
import BlogList from "../components/BlogList";

function BlogPage() {
  return (
    <>
      <Layout>
        <Title text="My Blog 📄" />
        <BlogList />
      </Layout>
    </>
  );
}

export default BlogPage;
