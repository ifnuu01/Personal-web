import React from "react";
import { motion } from "framer-motion";
import HTML from "../../public/html5.svg";
import CSS from "../../public/css3.svg";
import JS from "../../public/js.svg";
import PHP from "../../public/php.svg";
import Bootstrap from "../../public/bootstrap.svg";
import TailwindCss from "../../public/tailwind.svg";
import Reactjs from "../../public/reactjs.svg";
import Laravel from "../../public/laravel.svg";
import Nodejs from "../../public/nodejs.svg";
import Mysql from "../../public/mysql.svg";
import Python from "../../public/python.svg";
import Streamlit from "../../public/streamlit.svg";

function Tech() {
  const techs = [
    { src: HTML, alt: "html" },
    { src: CSS, alt: "css" },
    { src: JS, alt: "js" },
    { src: PHP, alt: "php" },
    { src: Nodejs, alt: "nodejs" },
    { src: Bootstrap, alt: "bootstrap" },
    { src: TailwindCss, alt: "tailwind" },
    { src: Reactjs, alt: "react" },
    { src: Laravel, alt: "laravel" },
    { src: Mysql, alt: "mysql" },
    { src: Python, alt: "python" },
    { src: Streamlit, alt: "streamlit" },
  ];

  return (
    <div className="mt-4 grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-6 lg:w-[40%] mx-auto lg:px-0 px-5 w-full">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-3 bg-white rounded-lg shadow-lg w-fit cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
        >
          <img src={tech.src} alt={tech.alt} className="w-8" />
        </motion.div>
      ))}
    </div>
  );
}

export default Tech;
