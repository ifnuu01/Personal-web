import React from "react";

function Footer() {
  return (
    <div>
      <footer className="mt-4">
        <div className="flex flex-col justify-center items-center h-16 text-white">
          <p className="text-sm text-primary">
            © {new Date().getFullYear()} Built with 😎 by Ifnu Umar
          </p>
          <div className="mt-2">
            <a
              href="https://github.com/ifnuumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 mx-2"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/ifnuumar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 mx-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
