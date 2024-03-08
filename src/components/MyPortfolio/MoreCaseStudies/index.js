import {
  CaseStudy,
  Title,
  Desc,
  LearnMoreCon,
  CaseStudyContent,
  Arrow,
  CaseStudyImage,
  Learn,
} from "./styled";

import arrow from "../images/arrow.png";
import { Link } from "react-router-dom";
const Case = (props) => {
  const { details } = props;
  const { title, desc, image, addres } = details;
  return (
    <CaseStudy>
      <CaseStudyImage src={image} alt="not found" />
      <CaseStudyContent>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Link to={addres}>
          {" "}
          <LearnMoreCon>
            <Learn>Learn More</Learn>
            <Arrow src={arrow} alt="not found" />
          </LearnMoreCon>
        </Link>
      </CaseStudyContent>
    </CaseStudy>
  );
};

export default Case;
