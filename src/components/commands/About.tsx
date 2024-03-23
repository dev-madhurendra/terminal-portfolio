import React from "react";
import { ABOUT_CONSTANTS } from "../../utils/constants";

const About = () => (
  <div>
    <h1 className="text-2xl text-yellow-200 animate-reveal-0.5">
      {ABOUT_CONSTANTS.ABOUT_TEXT}
    </h1>
    <p className="text-lg mb-3 animate-reveal-0.5">
      {ABOUT_CONSTANTS.ABOUT_DESCRIPTION}
    </p>
  </div>
);

export default About