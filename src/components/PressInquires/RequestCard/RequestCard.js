import React from 'react'
import {
    RequestCardCon,
    RequestImg,
    RequestTitle,
    RequestDescription,
    RequestTxt,
} from './styledComponents';

<<<<<<< HEAD
const RequestCard = (props) => {
    const { details } = props;
    const {imgUrl,title,description,RequestText} = details;
  return (
    <RequestCardCon>
    <RequestImg src={imgUrl} alt="not found" />
=======

const RequestCard = (props) => {
  const { details } = props;
  const {imgUrl,title,description,RequestText} = details;

  return (
    <RequestCardCon>
    <RequestImg src={imgUrl} alt="not found" >
    </RequestImg>
>>>>>>> main
    <RequestTitle>{title}</RequestTitle>
    <RequestDescription>{description}</RequestDescription>
    <RequestTxt>{RequestText}&rarr;</RequestTxt>
    </RequestCardCon>
<<<<<<< HEAD
  )
}

export default RequestCard

=======
  );
};

export default RequestCard
>>>>>>> main
