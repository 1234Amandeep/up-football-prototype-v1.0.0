import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Gallary from "../components/Gallary";
import JoinOurTeam from "../components/JoinOurTeam";
import TieupsSocialhandles from "../components/TieupsSocialhandles";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Gallary />
      {/* <JoinOurTeam /> */}

      {/* It was overflowing prev. next. btns are... */}
      <TieupsSocialhandles />
      <Footer />
    </>
  );
}
