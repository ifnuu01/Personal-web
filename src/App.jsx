import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import BlogPage from "./layouts/BlogPage";
import AOS from "aos";
import "aos/dist/aos.css";
import BlogDetail from "./components/BlogDetail";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
