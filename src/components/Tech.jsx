import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

function Tech() {
  const techs = [
    { src: "vscode-icons:file-type-html" },
    { src: "devicon:css3" },
    { src: "vscode-icons:file-type-js-official" },
    { src: "devicon:php" },
    { src: "devicon:nodejs-wordmark" },
    { src: "devicon:bootstrap" },
    { src: "devicon:tailwindcss" },
    { src: "logos:react" },
    { src: "logos:laravel" },
    { src: "devicon:mysql" },
    { src: "material-icon-theme:python" },
    { src: "devicon:streamlit" },
    { src: "devicon:typescript" },
    { src: "file-icons:expo" },
  ];

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4 md:gap-6 lg:w-[50%] xl:w-[50%] mx-auto px-5 lg:px-0">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            rotateY: 10,
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.4,
            delay: index * 0.05,
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
          viewport={{ once: true, amount: 0.3 }}
          className="group relative p-4 bg-white rounded-2xl shadow-md hover:shadow-xl cursor-pointer border border-gray-100 hover:border-primary/20 transition-all duration-300 ease-out"
        >
          <div className="relative z-10">
            <Icon
              icon={tech.src}
              className="text-4xl md:text-5xl transition-all duration-300 group-hover:scale-110"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-orange-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-primary to-orange-400 blur-sm -z-10"></div>
        </motion.div>
      ))}
    </div>
  );
}

export default Tech;
