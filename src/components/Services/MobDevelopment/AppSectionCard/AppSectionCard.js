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

const AppSectionCard = (props) => {
    const {details,onLearnMoreClick}=props;
    const {title,about,img}=details;
    const [matchingDetail] = useState(null);
    const handleLearnMoreClick = () => {
      // Assuming onLearnMoreClick is a callback provided by the parent component
      // to handle the "Learn More" click and update the UI accordingly.
      onLearnMoreClick(details);
    };
  return (
    <AppCardCon>
    <HeadingSpan />
    <WebSectionTwoHeading>{title}</WebSectionTwoHeading>
    <AppAbout>{about}</AppAbout>
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

export default AppSectionCard
