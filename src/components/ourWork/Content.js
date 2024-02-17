import React from "react";
<<<<<<< HEAD
=======
import pattern from "./Media/pattern.svg";

>>>>>>> main
import {
  OurWorkTextContainer,
  OurWorkOur,
  OurWorkOurText,
  OurWorkText,
<<<<<<< HEAD
  OurWorkPara
} from './styledComponents';
=======
  OurWorkPara,
  Pattern,
} from "./styledComponents";
>>>>>>> main

function Content() {
  return (
    <OurWorkTextContainer>
<<<<<<< HEAD
      <OurWorkOur>
        <OurWorkOurText>Our</OurWorkOurText> Recent{" "}
        <OurWorkText>work</OurWorkText>
=======
      <Pattern src={pattern} alt="pattern" />
      <OurWorkOur>
        <OurWorkOurText>Our</OurWorkOurText> Recent{" "}
        <OurWorkText>Work</OurWorkText>
>>>>>>> main
      </OurWorkOur>
      <OurWorkPara>
        We connect the best of design thinking, an agile way of
        <br />
        working, and lean agency principles to create our
        <br />
        growth-driven methodology.
      </OurWorkPara>
    </OurWorkTextContainer>
  );
}

export default Content;
