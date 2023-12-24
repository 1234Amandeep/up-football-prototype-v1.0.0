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
                  src="http://www.footballdelhi.com/wp-content/uploads/2018/11/live-match.gif"
                  className="card-img"
                  alt="Advertisement of mycujoo"
                />
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="card text-bg-dark border-0">
                <img
                  src="http://www.footballdelhi.com/wp-content/uploads/2018/11/u-15.jpg"
                  className="card-img"
                  alt="Academy league registration open"
                />
              </div>
            </div>
            <div className="col-md-4 col-xs-12 col-sm-4">
              <div className="card text-bg-dark border-0">
                <img
                  src="http://www.footballdelhi.com/wp-content/uploads/2018/11/d-licence.jpg"
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
