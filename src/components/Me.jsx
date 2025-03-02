import React, { useEffect, useState } from "react";

function Me() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <div className="text-primary font-medium px-6 text-justify max-w-[90%] sm:max-w-[80%] lg:w-[40%] mx-auto mt-4">
      {isLoading ? (
        // Skeleton menggunakan shimmer effect
        <div className="space-y-2">
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-full h-5 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="w-3/4 h-5 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      ) : (
        <p className="opacity-100 transition-opacity duration-500">
          I am currently a Bachelor of Informatics Engineering student at
          Mulawarman University, with a strong interest in software development
          💻, database management 🗄️, web development 🌐, and network systems
          🔗. 🚀 Throughout my academic journey, I have gained experience in
          various programming languages 🖋️, web development frameworks 🏗️, and
          problem-solving techniques 🧩. 🔥 I am passionate about learning 📚
          and applying new technologies 🛠️ to real-world projects, and I am
          eager to collaborate 🤝 with professionals in the technology industry
          to further develop my skills.
        </p>
      )}
    </div>
  );
}

export default Me;
