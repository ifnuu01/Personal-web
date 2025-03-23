import React, { useState, useEffect } from "react";
import IconTop from "../../public/IconTop.svg";

const ButtonToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed lg:bottom-5 bottom-20 right-5 bg-orange-500 text-white p-2 rounded-full rounded-b-none shadow-2xl hover:bg-orange-700 transition-all"
      >
        <img src={IconTop} alt="Top" className="w-8 h-8" />
      </button>
    )
  );
};

export default ButtonToTop;
