import SubCard from '../UiSubPage/SubCard/SubCard';
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

const DesignSectionCard = (props) => {
  const { details, onLearnMoreClick } = props;
  const { title, about, img, id } = details;

  const [matchingDetail, setMatchingDetail] = useState(null);

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
        <InsertImg src={img} />
        <WebTechButton onClick={handleLearnMoreClick}>Learn More</WebTechButton>
      </ImgCon>

      {matchingDetail && (
        <SubCard key={matchingDetail.id} details={matchingDetail} />
      )}
    </AppCardCon>
  );
};

export default DesignSectionCard;
