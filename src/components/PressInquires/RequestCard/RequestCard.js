import React from 'react'
import {
    RequestCardCon,
    RequestImg,
    RequestTitle,
    RequestDescription,
    RequestTxt,
} from './styledComponents';


const RequestCard = (props) => {
  const { details } = props;
  const {imgUrl,title,description,RequestText} = details;

  return (
    <RequestCardCon>
    <RequestImg src={imgUrl} alt="not found" >
    </RequestImg>
    <RequestTitle>{title}</RequestTitle>
    <RequestDescription>{description}</RequestDescription>
    <RequestTxt>{RequestText}&rarr;</RequestTxt>
    </RequestCardCon>
  );
};

export default RequestCard
