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
          Saya saat ini adalah mahasiswa S1 Teknik Informatika di Universitas
          Mulawarman, dengan minat yang kuat dalam pengembangan perangkat lunak
          💻, manajemen basis data 🗄️, pengembangan web 🌐, dan sistem jaringan
          🔗. 🚀 Selama perjalanan akademik saya, saya telah memperoleh
          pengalaman dalam berbagai bahasa pemrograman 🖋️, framework
          pengembangan web 🏗️, dan teknik pemecahan masalah 🧩. 🔥 Saya sangat
          antusias untuk terus belajar 📚 dan menerapkan teknologi baru 🛠️ pada
          proyek nyata, serta ingin berkolaborasi 🤝 dengan para profesional di
          industri teknologi untuk mengembangkan kemampuan saya lebih lanjut.
        </p>
      )}
    </div>
  );
}

export default Me;
