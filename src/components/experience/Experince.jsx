import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./experince.css";

const Experince = () => {
  return (
    <section id="experince">
      <h5 className="small">Skills I own</h5>
      <h1 className="myexp">My Experince</h1>
      <div className="container exp_cont">
        <div className="front">
          <div className="skil_head">
            <h1>Frontend Devlopment</h1>
          </div>
          <div className="skills">
            <div className="fcol">
              <h3 className="expH3">
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                HTML
              </h3>
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                CSS
              </h3>
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                Javascript
              </h3>
            </div>
            <div className="scol">
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                Bootstrap
              </h3>
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                React js
              </h3>
              {/* <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                html
              </h3> */}
            </div>
          </div>
        </div>
        <div className="back">
          <div className="skil_head">
            <h1>Backend Devlopment</h1>
          </div>
          <div className="skills">
            <div className="fcol">
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                Node js
              </h3>
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                Mongo DB
              </h3>
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                My SQL
              </h3>
            </div>
            <div className="scol">
              <h3>
                <FontAwesomeIcon
                  className="icondis"
                  icon={faCircleCheck}
                  color="#66fcf1"
                />
                Express
              </h3>
              {/* <h3><FontAwesomeIcon className='icondis' icon={faCircleCheck} color='#66fcf1' />html</h3>
            <h3><FontAwesomeIcon className='icondis' icon={faCircleCheck} color='#66fcf1' />html</h3> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experince;
