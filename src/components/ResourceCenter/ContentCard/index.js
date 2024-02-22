import rightArrow from "../images/rightarrow.svg";

import {
  CardContainer,
  Image,
  Title,
  Heading,
  Description,
  Arrow,
  ButtonCon,
  DetailsCon,
} from "./styled";

const ContentCard = (props) => {
  const { cardDetails } = props;
  const { title, heading, image, description } = cardDetails;
  return (
    <li>
      <CardContainer>
        <Image src={image} />
        <DetailsCon>
          <Title>{title}</Title>
          <Heading>{heading}</Heading>
          <Description>{description}</Description>
        </DetailsCon>
        <ButtonCon>
          <button>
            <Arrow src={rightArrow} alt="not found" />
          </button>
        </ButtonCon>
      </CardContainer>
    </li>
  );
};

export default ContentCard;
