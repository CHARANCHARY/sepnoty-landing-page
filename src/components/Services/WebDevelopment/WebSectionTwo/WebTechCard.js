import SubCard from '../SubCard/SubCard';
import React, { useState } from 'react';
import {
    WebTechCardCon,
    WebTechImg,
    WebTechAbout,
    WebTechButton,
} from './styled';

const WebTechCard = (props) => {
    const {details,onLearnMoreClick}=props;
    const {img,techAbout}=details;
    const [matchingDetail, setMatchingDetail] = useState(null);

  const handleLearnMoreClick = () => {
    // Assuming onLearnMoreClick is a callback provided by the parent component
    // to handle the "Learn More" click and update the UI accordingly.
    onLearnMoreClick(details);
  };
  return (
    <WebTechCardCon>
    <WebTechImg src={img}/>
    <WebTechAbout>{techAbout}</WebTechAbout>
    <WebTechButton onClick={handleLearnMoreClick}>Learn More</WebTechButton>
    {matchingDetail && (
      <SubCard key={matchingDetail.id} details={matchingDetail} />
    )}
    </WebTechCardCon>
  )
}

export default WebTechCard
