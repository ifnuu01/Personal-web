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
  ];

  return (
    <div className="mt-4 grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-6 lg:w-[40%] mx-auto lg:px-0 px-5 w-full">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="p-3 bg-white rounded-lg shadow-lg w-fit cursor-pointer transition-transform duration-300 ease-in-out"
        >
          <Icon icon={tech.src} className="text-4xl" />
        </motion.div>
      ))}
    </div>
  );
}

export default Tech;
