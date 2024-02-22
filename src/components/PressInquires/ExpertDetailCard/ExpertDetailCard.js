import React from 'react'
import {
    Expert,
    ExpHeading,ExpText,ExpImgRole,ExpImg,ExpRole,ExpRol,
    ExpName,
} from './styled';


const ExpertCardDetail = (props) => {
  const { details } = props;
  const {heading,topicText,ImgUrl,ExpertName,ExpertRole} = details;

  return (
   <Expert>
   <ExpHeading>{heading}</ExpHeading>
   <ExpText>{topicText}</ExpText>
   <ExpImgRole>
   <ExpImg src={ImgUrl}></ExpImg>
   <ExpRole>
   <ExpName>{ExpertName}</ExpName>
   <ExpRol>{ExpertRole}</ExpRol>
   </ExpRole>
   </ExpImgRole>
   <ExpImgRole>
   <ExpImg src={ImgUrl}></ExpImg>
   <ExpRole>
   <ExpName>{ExpertName}</ExpName>
   <ExpRol>{ExpertRole}</ExpRol>
   </ExpRole>
   </ExpImgRole>
   </Expert>
  );
};

export default ExpertCardDetail