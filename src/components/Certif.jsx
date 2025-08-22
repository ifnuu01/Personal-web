import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

function Certif() {
  const cardData = [
    {
      imageSrc: "/Junior-Web-Developer-BNSP.png",
      title: "Junior Web Developer",
      description: "BNSP",
      link: "",
    },
    {
      imageSrc: "/Networking-BNSP.png",
      title: "Computer & Networking Engineering",
      description: "BNSP",
      link: "",
    },
    {
      imageSrc: "/Sertif-React.png",
      title: "React JS-Web Frontend Developtment",
      description: "Sanbercode",
      link: "https://sanbercode.com/certificate/in/1340d014-5d5f-4576-acb4-8dd87011afb8",
    },
    {
      imageSrc: "/Sertif-Laravel.png",
      title: "Laravel Web Development",
      description: "Sanbercode",
      link: "https://sanbercode.com/certificate/in/c1efe47d-be01-4f38-ada5-7df84e3da6c4",
    },
    {
      imageSrc: "/HCIA-Datacom.png",
      title: "HCIA-Datacom V1.0",
      description: "Huawei Certified ICT Associate",
      link: "",
    },
    {
      imageSrc: "/HCIA-openEuler.png",
      title: "HCIA-openEuler",
      description: "Huawei Certified ICT Associate",
      link: "",
    },
    {
      imageSrc: "/IBMGenAi.png",
      title: "IBM Gen AI",
      description: "Certified AI Specialist",
      link: "",
    },
    {
      imageSrc: "/IBMGranite.png",
      title: "IBM Granite",
      description: "Granite Models",
      link: "",
    },
    {
      imageSrc: "/IBMCode.png",
      title: "Code Generation and Optimization",
      description: "IBM",
      link: "",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (data) => {
    setSelectedImage(data);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="w-full px-5 flex flex-wrap justify-center gap-4">
        {cardData.map((data, index) => {
          return (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-delay="300"
              className="mt-4"
            >
              <div className="bg-white shadow-lg rounded-lg w-[350px] md:w-80 p-4 relative group cursor-pointer h-32">
                <div className="text-primary font-semibold py-1 w-full">
                  <p>{data.description || ""}</p>
                </div>
                <h1 className="text-primary font-bold text-2xl">
                  {data.title}
                </h1>

                <button
                  className="absolute bottom-2 right-2 bg-white rounded-full p-1 shadow-md hover:bg-secondary transition-colors"
                  onClick={() => openModal(data)}
                >
                  <Icon icon="weui:eyes-on-filled" width="24" height="24" />
                </button>

                {data.link && (
                  <Link
                    to={data.link}
                    target="_blank"
                    className="absolute bottom-2 right-12 bg-white rounded-full p-1 shadow-md hover:bg-secondary transition-colors"
                  >
                    <Icon icon="material-symbols:link" width="24" height="24" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg p-2 max-w-lg w-full flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-2">
              {selectedImage.title}
            </h2>
            <img
              src={selectedImage.imageSrc}
              alt={selectedImage.title}
              className="w-96 h-auto rounded-lg mb-2"
            />
            <p className="text-gray-700 mb-4">{selectedImage.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Certif;
