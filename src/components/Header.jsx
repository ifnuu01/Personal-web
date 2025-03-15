import React from "react";
import foto from "../../public/ifnu.jpg";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const location = useLocation();
  return (
    <>
      <div className="relative bg-white rounded-3xl shadow-lg p-6 w-[100%] lg:w-[40%] text-center mx-auto mt-20 mb-4">
        <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-28 h-28 rounded-2xl z-10 flex justify-center items-center">
          <img src={foto} alt="" className="rounded-2xl shadow-2xl" />
        </div>

        <div className="mt-12">
          <h2 className="text-lg font-semibold text-primary cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
            Ifnu Umar
          </h2>
          <p className="text-gray-500">@ifnuu01</p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <motion.a
            href="https://www.linkedin.com/in/ifnu-umar-03859930a/"
            target="_blank"
            className="bg-white shadow-md p-2 rounded-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              className="w-6 h-6"
            />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/ifnu.ifnu.756859/"
            target="_blank"
            className="bg-white shadow-md p-2 rounded-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
              className="w-6 h-6"
            />
          </motion.a>
          <motion.a
            href="https://github.com/ifnuu01"
            target="_blank"
            className="bg-white shadow-md p-2 rounded-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733609.png"
              className="w-6 h-6"
            />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/ifnu_mr/"
            target="_blank"
            className="bg-white shadow-md p-2 rounded-xl cursor-pointer"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              className="w-6 h-6"
            />
          </motion.a>
        </div>
      </div>
      <div className="flex justify-between lg:justify-evenly text-primary font-semibold bg-white py-4 px-2 lg:px-2 shadow-lg w-[100%] lg:w-[40%] mx-auto fixed bottom-0 left-0 right-0 z-10 backdrop-blur bg-opacity-60 lg:sticky lg:top-5 lg:py-4 lg:rounded-3xl lg:shadow-2xl">
        {/* About */}
        <Link
          to="/"
          className="relative flex items-center cursor-pointer group"
        >
          <span className="text-md lg:text-lg">👋 About</span>
          <span
            className={`absolute bottom-0 top-6 lg:top-8 left-0 w-full h-[2px] bg-[#FC882F] 
                ${
                  location.pathname === "/"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 ease-in-out`}
          ></span>
        </Link>

        {/* Projects */}
        <Link
          to="/projects"
          className="relative flex items-center cursor-pointer group"
        >
          <span className="text-md lg:text-lg">🛠️ Projects</span>
          <span
            className={`absolute bottom-0 top-6 lg:top-8 left-0 w-full h-[2px] bg-[#FC882F] 
                ${
                  location.pathname === "/projects"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 ease-in-out`}
          ></span>
        </Link>

        {/* Resume */}
        <Link
          to="/resume"
          className="relative flex items-center cursor-pointer group"
        >
          <span className="text-md lg:text-lg">📄 Resume</span>
          <span
            className={`absolute bottom-0 top-6 lg:top-8 left-0 w-full h-[2px] bg-[#FC882F] 
                ${
                  location.pathname === "/resume"
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                } transition-transform duration-300 ease-in-out`}
          ></span>
        </Link>
      </div>
    </>
  );
};

export default Header;
