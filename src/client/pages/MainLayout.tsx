import React from "react";
// import { useAppContext } from "../Context";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  // const { name, setName } = useAppContext();
  return (
    <>
      <Header />
      <main className="o-main">
        <div className="py-5 text-xl [&_p]:my-6"><Outlet /></div>
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
