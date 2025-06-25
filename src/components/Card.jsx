import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from "@iconify/react";

function Card() {
  const cardData = [
    {
      imageSrc: "/issue-sedunia.png",
      title: "Issue Sedunia",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/issue-sedunia",
      techIcons: [
        { src: "vscode-icons:file-type-html", alt: "HTML5" },
        { src: "devicon:css3", alt: "CSS3" },
        { src: "vscode-icons:file-type-js-official", alt: "JavaScript" },
        { src: "devicon:php", alt: "PHP" },
      ],
    },
    {
      imageSrc: "/pet-heaven.png",
      title: "Pet Heaven",
      linkIcon: "🔗",
      link: "https://pet-heaven.wuaze.com/",
      techIcons: [
        { src: "vscode-icons:file-type-html", alt: "HTML5" },
        { src: "devicon:css3", alt: "CSS3" },
        { src: "vscode-icons:file-type-js-official", alt: "JavaScript" },
        { src: "devicon:php", alt: "PHP" },
      ],
    },
    {
      imageSrc: "/eazy-ui.png",
      title: "Eazy UI",
      linkIcon: "🔗",
      link: "https://eazy-ui.vercel.app/",
      techIcons: [
        { src: "logos:react", alt: "React" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/ReFilm.png",
      title: "ReFilm",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/Re-Film-v2",
      techIcons: [
        { src: "devicon:laravel", alt: "Laravel" },
        { src: "devicon:tailwindcss", alt: "Tailwindcss" },
      ],
    },
    {
      imageSrc: "/Eazy-Job.png",
      title: "Eazy Job",
      linkIcon: "🔗",
      link: "https://sparkling-youtiao-604eee.netlify.app/",
      techIcons: [
        { src: "logos:react", alt: "React" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/tomato-detection.png",
      title: "Tomato Detection",
      linkIcon: "🔗",
      link: "https://tomato-ripeness-detection-nvb4bjpbumixgkm5khedea.streamlit.app/",
      techIcons: [
        { src: "material-icon-theme:python", alt: "Python" },
        { src: "devicon:streamlit", alt: "Streamlit" },
      ],
    },
    {
      imageSrc: "/Porto-v1.png",
      title: "Porto v1",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/Porto-v1",
      techIcons: [
        { src: "logos:react", alt: "React" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/Laundry-Notes.png",
      title: "Laundry Notes",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/LaundryNotes",
      techIcons: [
        { src: "devicon:laravel", alt: "Laravel" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
        { src: "devicon:mysql", alt: "MySQL" },
      ],
    },
    {
      imageSrc: "/I-Catat.png",
      title: "I-Catat",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/Pencatatan-Keuangan",
      techIcons: [
        { src: "devicon:laravel", alt: "Laravel" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
        { src: "devicon:mysql", alt: "MySQL" },
        { src: "logos:react", alt: "React" },
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
                  <Icon icon={icon.src} className="text-2xl" alt={icon.alt} />
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
