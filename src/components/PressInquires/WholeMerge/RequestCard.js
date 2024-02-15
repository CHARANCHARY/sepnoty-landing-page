import React from 'react'
import {
    RequestCardContainer,
    RequestImg,
    RequestTitle,
    RequestDescription,
    RequestTxt,
} from './styledComponents';

const RequestCard = (props) => {
    const { details } = props;
    const {imgUrl,title,description,RequestText} = details;
  return (
    <RequestCardContainer>
    <RequestImg src={imgUrl} alt="not found"></RequestImg>
    <RequestTitle>{title}</RequestTitle>
    <RequestDescription>{description}</RequestDescription>
    <RequestTxt>{RequestText}&rarr;</RequestTxt>
    </RequestCardContainer>
  )
}

export default RequestCard

