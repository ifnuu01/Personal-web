import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-custom-bg bg-cover bg-center bg-fixed">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
