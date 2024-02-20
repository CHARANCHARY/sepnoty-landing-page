import React from 'react'
import {
    TechCardContainer,
    TechImg,
    TechAbout,
} from './styledComponents';


const TechCard = (props) => {
  const { details } = props;
  const {TechUrl,title} = details;

  return (
   <TechCardContainer>
   <TechImg src={TechUrl} alt="not found"></TechImg>
   <TechAbout>{title}</TechAbout>
   </TechCardContainer>
  );
};

export default TechCard