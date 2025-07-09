import { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from "@iconify/react";

function Card() {
  const cardData = [
    {
      imageSrc: "/issue-sedunia.png",
      title: "Issue Sedunia",
      description: "This is a platform to report and discuss global issues.",
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
      imageSrc: "/eazy-ui.png",
      title: "Eazy UI",
      description: "A simple and easy-to-use UI library CSS Native.",
      linkIcon: "🔗",
      link: "https://eazy-ui.vercel.app/",
      techIcons: [
        { src: "logos:react", alt: "React" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/tomato-detection.png",
      title: "Tomato Detection",
      description: "A Streamlit app for detecting the ripeness of tomatoes.",
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
      description:
        "A personal portfolio website built with React and Tailwind CSS.",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/Porto-v1",
      techIcons: [
        { src: "logos:react", alt: "React" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/Porto-v2.png",
      title: "Porto v2",
      description:
        "A personal portfolio website built with React and Tailwind CSS, featuring a modern design.",
      linkIcon: "🔗",
      link: "https://ifnu-umar.vercel.app/",
      techIcons: [
        { src: "logos:react", alt: "React" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/pet-heaven.png",
      title: "Pet Heaven",
      description: "A platform for buying and selling pets.",
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
      imageSrc: "/I-Timer.png",
      title: "I-Timer",
      description: "A simple timer application built with React.",
      linkIcon: "🔗",
      link: "https://i-timer-two.vercel.app/",
      techIcons: [
        { src: "devicon:typescript", alt: "TypeScript" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/ReFilm.png",
      title: "ReFilm",
      description: "A movie review platform built with Laravel.",
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
      description: "A job listing platform built with React and Tailwind CSS.",
      linkIcon: "🔗",
      link: "https://sparkling-youtiao-604eee.netlify.app/",
      techIcons: [
        { src: "logos:react", alt: "React" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/Laundry-Notes.png",
      title: "Laundry Notes",
      description: "A laundry management system built with Fullstack Laravel.",
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
      description: "A personal finance management application.",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/Pencatatan-Keuangan",
      techIcons: [
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
        { src: "logos:react", alt: "React" },
      ],
    },
    {
      imageSrc: "/I-Tracker.png",
      title: "I-Tracker",
      description:
        "A task management application built with Fullstack Laravel.",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/I-Tracker",
      techIcons: [
        { src: "devicon:laravel", alt: "Laravel" },
        { src: "devicon:typescript", alt: "TypeScript" },
        { src: "devicon:tailwindcss", alt: "Tailwind CSS" },
      ],
    },
    {
      imageSrc: "/Laravel-Api.png",
      title: "API I-Catat",
      description: "A RESTful API for personal finance management.",
      linkIcon: "🔗",
      link: "https://github.com/ifnuu01/api-pencatatan-keuangan",
      techIcons: [
        { src: "devicon:laravel", alt: "Laravel" },
        { src: "devicon:mysql", alt: "MySQL" },
      ],
    },
  ];

  return (
    <div className="w-full px-5 grid grid-cols-1 gap-2 md:grid-cols-2 lg:px-0 lg:grid-cols-4 lg:w-[90%] mx-auto">
      {cardData.map((data, index) => {
        const [isImageLoaded, setIsImageLoaded] = useState(false);
        return (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay="300"
            className="mt-4"
          >
            {/* Image */}
            <div className="bg-white shadow-lg rounded-lg w-full p-2 relative group cursor-pointer">
              {!isImageLoaded && <Skeleton height={160} borderRadius={16} />}
              <img
                src={data.imageSrc}
                className={`rounded-lg shadow-inner h-40 w-full object-cover ${
                  isImageLoaded ? "block" : "hidden"
                }`}
                alt=""
                onLoad={() => setIsImageLoaded(true)}
              />
              <div className="absolute bottom-2 right-2 bg-white text-primary font-semibold px-6 w-full h-[80px] overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in">
                <p>{data.description || ""}</p>
              </div>
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
