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
const SubPageList = [
  {
    id: 1,
    name: 'Padma',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 2,
    name: 'Yamini',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    id: 3,
    name: 'Charan',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

const DesignSectionCard = (props) => {
  const { details, onLearnMoreClick } = props;
  const { title, about, img, id } = details;

  const [matchingDetail, setMatchingDetail] = useState(null);

  const handleLearnMoreClick = () => {
    const matchingDetail = SubPageList.find((item) => item.id === id);
    setMatchingDetail(matchingDetail);
    onLearnMoreClick(); // Notify the parent component
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
