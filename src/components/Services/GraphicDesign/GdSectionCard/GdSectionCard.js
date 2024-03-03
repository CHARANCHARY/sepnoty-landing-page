import SubCard from '../SubCard/SubCard';
import React, { useState } from 'react';
import {
  AppCardCon,
  HeadingSpan,
  WebSectionTwoHeading,
  AppAbout,
  ImgCon,
  InsertImg,
  WebTechButton,
} from './styled';

const GdSectionCard = (props) => {
    const {details,onLearnMoreClick}=props;
    const {name,text,img}=details;
    const [matchingDetail, setMatchingDetail] = useState(null);
    const handleLearnMoreClick = () => {
      // Assuming onLearnMoreClick is a callback provided by the parent component
      // to handle the "Learn More" click and update the UI accordingly.
      onLearnMoreClick(details);
    };
  return (
    <AppCardCon>
    <HeadingSpan />
    <WebSectionTwoHeading>{name}</WebSectionTwoHeading>
    <AppAbout>{text}</AppAbout>
    <ImgCon>
    <InsertImg src={img}></InsertImg>
    <WebTechButton onClick={handleLearnMoreClick}>Learn More</WebTechButton>
    {matchingDetail && (
      <SubCard key={matchingDetail.id} details={matchingDetail} />
    )}
    </ImgCon>
    </AppCardCon>
  )
}

export default GdSectionCard
