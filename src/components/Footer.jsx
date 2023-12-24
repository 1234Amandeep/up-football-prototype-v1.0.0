import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="footer mt-5 pt-3 pt-lg-5 pb-2">
        <div className="container-lg fw-light">
          <div className="row text-light">
            <div className="col-lg-3">
              <p className="h4 fw-light">COMPETITIONS</p>
              <ul className="list-unstyled">
                <li className="text-light">Men's Competitions</li>
                <li>
                  <ul>
                    <li>Senior Division League</li>
                    <li>Amature Division</li>
                    <li>Institutional Leagues</li>
                  </ul>
                </li>
                <li className="text-light">Women's Competitions</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="h4 fw-light">STATE TEAM</p>
              <ul className="list-unstyled">
                <li className="text-light">Men</li>
                <li>
                  <ul>
                    <li>Senior Men State Team</li>
                    <li>Junior State Team</li>
                    <li>Sub junior State Team</li>
                  </ul>
                </li>
                <li className="text-light">Women</li>
                <li>
                  <ul>
                    <li>Senior Women's Team</li>
                    <li>Junior State Women's Team</li>
                    <li>Sub junior State Women's Team</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="h4 fw-light">COURSES</p>
              <ul className="list-unstyled">
                <li className="text-light">D Licence</li>
                <li className="text-light">C Licence</li>
                <li className="text-light">B Licence</li>
                <li className="text-light">A Licence</li>
                <li className="text-light">Grassroots</li>
                <li className="text-light">Football Management</li>
              </ul>
            </div>
            <div className="col-lg-3">
              <p className="h4 fw-light">USEFUL LINKS</p>
              <ul className="list-unstyled">
                <li className="text-light">Election Schedule</li>
                <li className="text-light">About Us</li>
                <li className="text-light">Events</li>
                <li className="text-light">Financial Data</li>
                <li className="text-light">Terms & Conditions</li>
                <li className="text-light">Privacy Policy</li>
                <li className="text-light">Disclaimer</li>
                <li className="text-light">Sitemap</li>
              </ul>
            </div>
          </div>
        </div>

        <img
          src="https://www.footballdelhi.com/wp-content/themes/football/img/bottom.png"
          alt="bottom line"
          style={{ display: "block", width: "100%" }}
        />
      </footer>
      <div className="rights fw-light">
        <div className="container  d-lg-flex justify-content-lg-between pt-2 pb-2">
          <p className="mb-0">
            <small>© 2018 | All rights reserved.</small>
          </p>
          <p className="text-end mb-0">
            <small className="text-end ">
              Tech & Digital Partner : ITCombine
            </small>
          </p>
        </div>
      </div>
    </>
  );
}
