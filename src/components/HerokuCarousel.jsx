import React from "react";

export default function HerokuCarousel() {
  return (
    <>
      <div className="heroku-carousel">
        <div
          id="carouselExampleControls"
          className="carousel carousel-fade slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://www.footballdelhi.com/wp-content/uploads/2020/12/Image.png"
                className="d-block w-100"
                alt="our partner Sporjo"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.footballdelhi.com/wp-content/uploads/2020/12/Image-1.jpeg"
                className="d-block w-100"
                alt="Our partner CASE"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.footballdelhi.com/wp-content/uploads/2019/04/2019-04-15.jpg"
                className="d-block w-100"
                alt="Football Ratna Sunil sir with Saji prabhakaran"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.footballdelhi.com/wp-content/uploads/2019/04/Banner_03.jpg"
                className="d-block w-100"
                alt="Trails Competitions Coaches"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
