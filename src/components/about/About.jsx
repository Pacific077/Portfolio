import React from "react";
import "./About.css";
import ME from "../../assets/ok.jpg";
import Card from "../card/Card";
import Array from "./Cardarray";

const fun1 = (temp) => {
  return <Card brand={temp.brand} title={temp.title} subt={temp.subtitle} />;
};

const About = () => {
  return (
    <section id="about">
      <h5 className="small">Get to know</h5>
      <h1 className="aboutme">About me</h1>
      <div className="about__container">
        <div className="about__me">
          <img className="" src={ME} alt="" srcset="" />
        </div>

        <div className="about__content">
          <div className="cards"> {Array.map(fun1)}</div>
          <div className="info">
            I am a passionate Full Stack MERN Developer, dedicated to creating
            seamless and responsive web applications. With expertise in MongoDB,
            Express.js, React.js, and Node.js, I bring innovation to every
            project.
          </div>
          <a href="#contact" className="gbt btn btn_prim">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
