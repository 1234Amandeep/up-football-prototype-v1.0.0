import React from "react";

export default function DetailedInfo() {
  return (
    <>
      <section className="detailed-info mt-3 mt-lg-5 text-light ">
        <img
          className="responsive-img"
          src="https://www.footballdelhi.com/wp-content/themes/football/img/men-woman.png"
          alt="Women's football / Men's football"
        />
        {/* Members */}
        <div className="members-info mt-3">
          <div className="container pt-3">
            <h4 className="text-center ">Football Delhi Members</h4>
            <div className="row mt-lg-5 pb-lg-3  text-center fw-bolder">
              <div className="col-sm-12 col-md-3 col-lg-3">
                <h1>20</h1>
                <p>
                  Senior Division <span className="d-block">Clubs</span>
                </p>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <h1>43</h1>
                <p>
                  A & B Division <span className="d-block">Clubs</span>
                </p>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <h1>20</h1>
                <p>
                  Women <span className="d-block">Clubs</span>
                </p>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-3">
                <h1>20</h1>
                <p>
                  Institutional <span className="d-block">Clubs</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Grassroots */}
        <div className="grassroots-info">
          <div className="container-lg pt-lg-5 pb-lg-5 pt-3 pb-3">
            <div className="row">
              <div className="col-lg-6 text-center">
                <h4 className="text-left">Golden League</h4>

                <img
                  className="grassroot-img"
                  src="https://www.footballdelhi.com/wp-content/themes/football/img/grassroots-icon.png"
                  alt="golden league icon"
                />
                <p className="lh-sm  fw-light">
                  Under 9 League | Under 11 league
                </p>
              </div>
              <div className="col-lg-6 text-center">
                <h4 className="text-left">Center of Excellence</h4>

                <img
                  src="https://www.footballdelhi.com/wp-content/themes/football/img/COE-icon.png"
                  alt="center of exellence icon"
                />
                <p className="lh-sm mb-0 fw-light">
                  Junior Girls Center of Excellence
                </p>
                <p className="lh-sm text-left fw-light">
                  Sub Junior Girls Center of Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
