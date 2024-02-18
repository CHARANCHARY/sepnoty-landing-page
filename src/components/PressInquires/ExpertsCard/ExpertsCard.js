import React from 'react'
import {
    ExpertCardContainer,
    ExpertImg,
    ExpertAbout,
} from './styledComponents';


const ExpertsCard = (props) => {
  const { details } = props;
  const {src,about} = details;

  return (
   <ExpertCardContainer>
   <ExpertImg src={src} alt="not found"></ExpertImg>
   <ExpertAbout>{about}</ExpertAbout>
   </ExpertCardContainer>
  );
};

export default ExpertsCard