import React from 'react'
import {
    WorkCardCon,
    WorkImg,
    ReadMore
} from './styled';
const WorkCard = (props) => {
    const { details } = props;
    const {imgUrl} = details;
  
    return (
     <WorkCardCon>
      <WorkImg src={imgUrl} />
      <ReadMore>Read More</ReadMore>
     </WorkCardCon>
    );
  };

export default WorkCard
