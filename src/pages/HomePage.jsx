import React from "react";
import Heroku from "../components/Heroku";
import HomeAbout from "../components/HomeAbout";
import DetailedInfo from "../components/DetailedInfo";

export default function HomePage() {
  return (
    <>
      <Heroku />
      <HomeAbout />
      <DetailedInfo />
    </>
  );
}
