import React from "react";

export default function JoinOurTeam() {
  return (
    <>
      <section className="join-our-team mt-5 mb-5 pt-3 pb-4">
        <div className="container-lg text-light">
          <div className="d-flex  align-items-center gap-4">
            {/* <FontAwesomeIcon icon="fa-solid fa-people-group" /> */}
            <img src="./src/assets/images/root/join-team-icon.png" alt="" />
            <h4 className="mb-0">JOIN OUR TEAM</h4>

            <ul className="list-inline mb-0">
              <li className="list-inline-item">Be a Volunteer</li>
              <li className="list-inline-item">Work With Us</li>
              <li className="list-inline-item">Fund/ Donate an Activity</li>
              <li className="list-inline-item">Be a Scout</li>
            </ul>
            <button className="btn btn-primary btn-sm">FILL THE FORM</button>
          </div>
        </div>
      </section>
    </>
  );
}
