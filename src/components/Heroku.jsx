import React from "react";
import HerokuCarousel from "./HerokuCarousel";
import HerokuBanners from "./HerokuBanners";

export default function Heroku() {
  return (
    <>
      <section className="heroku">
        <HerokuCarousel />
        <HerokuBanners />
      </section>
    </>
  );
}
