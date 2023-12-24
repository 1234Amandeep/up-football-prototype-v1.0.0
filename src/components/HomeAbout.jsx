import React from "react";

export default function HomeAbout() {
  return (
    <>
      <section className="home-about mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-3 mb-3 left-artist">
              <img
                className="responsive-img pe-lg-0 pe-4"
                src="https://www.footballdelhi.com/wp-content/themes/football/img/fd-about.png"
                alt="logo left align for about section"
              />
            </div>
            <div className="col-lg-9 col-md-9 right-content">
              <div className="row">
                <div className="container">
                  <div className="col-lg-8 col-md-8">
                    <div className="about-content-container ps-3 pe-3">
                      <h2 className="text-center">About Us</h2>
                      <p className="lh-sm" style={{ color: "hsl (120, 1,1)" }}>
                        <small>
                          Football Delhi is the governing body of football in
                          Delhi. We are committed to working with highest levels
                          of professionalism and integrity, to ensure that
                          everybody in Delhi who desires to engage with football
                          is encouraged to and enabled to do so and give the
                          sport one’s best. We partner with the clubs,
                          facilities owners, coaches and all other elements
                          across levels of the football eco-system to create an
                          environment that’s healthy and conducive to maximising
                          participation and achieving excellence in the sport.
                          We ensure that in Delhi, football is for all. And that
                          defines what we stand for.
                        </small>
                      </p>
                      <p className="fw-bolder mb-0 pb-0 lh-1">Football Delhi</p>
                      <p className="lh-1">
                        <small className="fst-italic font-monospace">
                          We all play football
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 list-part">
                  <ul className="list-group">
                    <button
                      type="button"
                      className="list-group-item list-group-item-action active"
                      aria-current="true"
                    >
                      About Us
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action list-group-item-light"
                    >
                      Office Bearers
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action list-group-item-light"
                    >
                      History of Football Delhi
                    </button>
                    <button
                      type="button"
                      className="list-group-item list-group-item-action list-group-item-light"
                    >
                      Our Heroes
                    </button>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
