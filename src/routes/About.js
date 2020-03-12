import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        “Dream the impossible, do the impossible love, fight with unwinnable enemy, resist the irresistible pain, Catch the uncatchable star in the sky.”
      </span>
      <span>- Don Quixote -</span>
    </div>
  );
}

export default About;