import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import HTML from "../../public/html5.svg";
import CSS from "../../public/css3.svg";
import JS from "../../public/js.svg";
import PHP from "../../public/php.svg";
import Python from "../../public/python.svg";
import Streamlit from "../../public/streamlit.svg";
import Reactjs from "../../public/reactjs.svg";
import Tailwindcss from "../../public/tailwind.svg";

function Card() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const cardData = [
    {
      imageSrc: "/issue-sedunia.png",
      title: "Issue Sedunia",
      linkIcon: "🔗",
      techIcons: [
        { src: HTML, alt: "HTML5" },
        { src: CSS, alt: "CSS3" },
        { src: JS, alt: "JavaScript" },
        { src: PHP, alt: "PHP" },
      ],
    },
    {
      imageSrc: "/pet-heaven.png",
      title: "Pet Heaven",
      linkIcon: "🔗",
      techIcons: [
        { src: HTML, alt: "HTML5" },
        { src: CSS, alt: "CSS3" },
        { src: JS, alt: "JavaScript" },
        { src: PHP, alt: "PHP" },
      ],
    },
    {
      imageSrc: "/tomato-detection.png",
      title: "Tomato Detection",
      linkIcon: "🔗",
      techIcons: [
        { src: Python, alt: "Python" },
        { src: Streamlit, alt: "Streamlit" },
      ],
    },
    {
      imageSrc: "/Porto-v1.png",
      title: "Porto v1",
      linkIcon: "🔗",
      techIcons: [
        { src: Reactjs, alt: "React" },
        { src: Tailwindcss, alt: "Tailwind CSS" },
      ],
    },
  ];

  return (
    <div className="w-full px-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:px-0 lg:grid-cols-2 lg:w-[40%] mx-auto">
      {cardData.map((data, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }} // Mulai dari kanan
          animate={{ opacity: 1, x: 0 }} // Muncul dengan efek slide ke kiri
          transition={{ duration: 0.2, delay: index * 0.2 }} // Efek delay antar kartu
          className="mt-4"
        >
          {/* Image */}
          <div className="bg-white shadow-lg rounded-3xl w-full p-2">
            {isLoading ? (
              <Skeleton height={160} borderRadius={16} />
            ) : (
              <img
                src={data.imageSrc}
                className="rounded-2xl shadow-inner h-40 w-full object-cover"
                alt=""
              />
            )}
          </div>

          {/* Content */}
          <div className="flex justify-between items-center mt-2">
            <div className="bg-white shadow-lg rounded-full rounded-tl-none w-fit p-2">
              {isLoading ? (
                <Skeleton width={120} height={20} />
              ) : (
                <p className="font-bold text-md drop-shadow-lg cursor-default text-primary">
                  {data.title}
                </p>
              )}
            </div>
            <div className="bg-white shadow-lg rounded-lg w-fit p-2 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
              {isLoading ? (
                <Skeleton width={20} height={20} />
              ) : (
                <p>{data.linkIcon}</p>
              )}
            </div>
          </div>

          {/* Tech */}
          <div className="flex items-center flex-wrap gap-2 mt-2">
            {isLoading
              ? [...Array(4)].map((_, i) => (
                  <Skeleton key={i} width={40} height={40} borderRadius={8} />
                ))
              : data.techIcons.map((icon, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-lg rounded-lg rounded-tl-none w-fit p-2"
                  >
                    <img src={icon.src} alt={icon.alt} className="w-6" />
                  </div>
                ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default Card;
