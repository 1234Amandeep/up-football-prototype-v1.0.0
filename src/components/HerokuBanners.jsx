import React from "react";

export default function HerokuBanners() {
  return (
    <>
      <div className="banners mt-1">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="card text-bg-dark border-0">
                <img
                  src="./src/assets/images/heroku/banners/banner-01.gif"
                  className="card-img"
                  alt="Advertisement of mycujoo"
                />
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="card text-bg-dark border-0">
                <img
                  src="./src/assets/images/heroku/banners/banner-02.jpg"
                  className="card-img"
                  alt="Academy league registration open"
                />
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="card text-bg-dark border-0">
                <img
                  src="./src/assets/images/heroku/banners/banner-03.jpg"
                  className="card-img"
                  alt="Apply for D license"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
