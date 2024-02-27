import React from 'react'
import {
    ChooseCardCon,
    ChooseTitle,
    ChooseText
} from './styled';


const ChooseCard = (props) => {
  const { details } = props;
  const {title,text} = details;

  return (
   <ChooseCardCon>
    <ChooseTitle>{title}</ChooseTitle>
    <ChooseText>{text}</ChooseText>
   </ChooseCardCon>
  );
};

export default ChooseCard
