import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <section id="footer">
      {/* <div className="foot1">
        <a href="http://">Home</a>
        <a href="http://">About</a>
        <a href="http://">Experince</a>
        <a href="http://">Contact</a>
      </div> */}
      <div className="foot2">
        <p>
          <div className="fficon1">
            <FontAwesomeIcon
              className="ficon"
              icon={faMapLocationDot}
              size="xl"
            />
          </div>
          Old Kairimgunj Gaya,Bihar
        </p>
        <p>
          <div className="fficon2">
            <FontAwesomeIcon className="ficon" icon={faMobile} size="xl" />
          </div>
          +91 8579980070
        </p>
        <p>
          <div className="fficon3">
            <FontAwesomeIcon className="ficon" icon={faEnvelope} size="xl" />
          </div>
          rahmanfaisal516@gmail.com
        </p>
      </div>
      <div className="foot3">
        <h3>About</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
          quis velit esse vitae assumenda minima nostrum vel dolorum
         
        </p>
        <div className="f3icons">
          <FontAwesomeIcon className="ficon3" icon={faFacebook} size="2xl" />
          <FontAwesomeIcon className="ficon3" icon={faInstagram} size="2xl" />
          <FontAwesomeIcon className="ficon3" icon={faGithub} size="2xl" />
          <FontAwesomeIcon className="ficon3" icon={faLinkedin} size="2xl" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
