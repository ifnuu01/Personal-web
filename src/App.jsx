import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./layouts/About";
import Projects from "./layouts/Projects";
import ResumePage from "./layouts/ResumePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
