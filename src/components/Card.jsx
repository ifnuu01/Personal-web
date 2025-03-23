import React, { useState, useEffect } from "react";
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
import Laravel from "../../public/laravel.svg";

function Card() {
  const [isLoading, setIsLoading] = useState(true);

  const cardData = [
    {
      imageSrc: "/issue-sedunia.png",
      title: "Issue Sedunia",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/issue-sedunia",
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
      link: "https://pet-heaven.wuaze.com/",
      techIcons: [
        { src: HTML, alt: "HTML5" },
        { src: CSS, alt: "CSS3" },
        { src: JS, alt: "JavaScript" },
        { src: PHP, alt: "PHP" },
      ],
    },
    {
      imageSrc: "/eazy-ui.png",
      title: "Eazy UI",
      linkIcon: "🔗",
      link: "https://eazy-ui.vercel.app/",
      techIcons: [
        { src: Reactjs, alt: "React" },
        { src: Tailwindcss, alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/ReFilm.png",
      title: "ReFilm",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/Re-Film-v2",
      techIcons: [
        { src: Laravel, alt: "Laravel" },
        { src: Tailwindcss, alt: "Tailwindcss" },
      ],
    },
    {
      imageSrc: "/Eazy-Job.png",
      title: "Eazy Job",
      linkIcon: "🔗",
      link: "https://sparkling-youtiao-604eee.netlify.app/",
      techIcons: [
        { src: Reactjs, alt: "React" },
        { src: Tailwindcss, alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/tomato-detection.png",
      title: "Tomato Detection",
      linkIcon: "🔗",
      link: "https://tomato-ripeness-detection-nvb4bjpbumixgkm5khedea.streamlit.app/",
      techIcons: [
        { src: Python, alt: "Python" },
        { src: Streamlit, alt: "Streamlit" },
      ],
    },
    {
      imageSrc: "/Porto-v1.png",
      title: "Porto v1",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/Porto-v1",
      techIcons: [
        { src: Reactjs, alt: "React" },
        { src: Tailwindcss, alt: "Tailwind CSS" },
      ],
    },
  ];

  return (
    <div className="w-full px-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:px-0 lg:grid-cols-2 lg:w-[40%] mx-auto">
      {cardData.map((data, index) => {
        const [isImageLoaded, setIsImageLoaded] = useState(false);
        return (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="mt-4"
          >
            {/* Image */}
            <div className="bg-white shadow-lg rounded-3xl w-full p-2">
              {!isImageLoaded && <Skeleton height={160} borderRadius={16} />}
              <img
                src={data.imageSrc}
                className={`rounded-2xl shadow-inner h-40 w-full object-cover ${
                  isImageLoaded ? "block" : "hidden"
                }`}
                alt=""
                onLoad={() => setIsImageLoaded(true)}
              />
            </div>

            {/* Content */}
            <div className="flex justify-between items-center mt-2">
              <div className="bg-white shadow-lg rounded-full rounded-tl-none w-fit p-2">
                <p className="font-bold text-md drop-shadow-lg cursor-default text-primary">
                  {data.title}
                </p>
              </div>
              <div className="bg-white shadow-lg rounded-lg w-fit p-2 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out">
                <a href={data.link} target="_blank">
                  {data.linkIcon}
                </a>
              </div>
            </div>

            {/* Tech */}
            <div className="flex items-center flex-wrap gap-2 mt-2">
              {data.techIcons.map((icon, i) => (
                <div
                  key={i}
                  className="bg-white shadow-lg rounded-lg rounded-tl-none w-fit p-2"
                >
                  <img src={icon.src} alt={icon.alt} className="w-5" />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
