import React from "react";
import HTML from "../../public/html5.svg";
import CSS from "../../public/css3.svg";
import JS from "../../public/js.svg";
import PHP from "../../public/php.svg";
import Python from "../../public/python.svg";
import Streamlit from "../../public/streamlit.svg";
import Reactjs from "../../public/reactjs.svg";
import Tailwindcss from "../../public/tailwind.svg";

function Card() {
  const cardData = [
    {
      imageSrc: "/public/issue-sedunia.png",
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
      imageSrc: "/public/pet-heaven.png",
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
      imageSrc: "/public/tomato-detection.png",
      title: "Tomato Detection",
      linkIcon: "🔗",
      techIcons: [
        { src: Python, alt: "Python" },
        { src: Streamlit, alt: "Streamlit" },
      ],
    },
    {
      imageSrc: "/public/Porto-v1.png",
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
        <div key={index} className="mt-4">
          {/* Image */}
          <div className="bg-white shadow-lg rounded-3xl w-full p-2">
            <img
              src={data.imageSrc}
              className="rounded-2xl shadow-inner"
              alt=""
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
              <p className="font-bold text-md drop-shadow-lg">
                {data.linkIcon}
              </p>
            </div>
          </div>
          {/* Tech */}
          <div className="flex items-center flex-wrap gap-2 mt-2">
            {data.techIcons.map((icon, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg rounded-tl-none w-fit p-2"
              >
                <img src={icon.src} alt={icon.alt} className="w-6" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
