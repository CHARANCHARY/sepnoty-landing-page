import {Title, CardImage, CardDiscription, LearnMore, CardContainer} from "./styledComponents"
const Allcards = (props) => {
  const { details } = props;
  const { name, discription, imageUrl } = details;

  return (
    <CardContainer>
      <CardImage src={imageUrl} alt="cloud app"/>
      <Title>{name}</Title>
      <CardDiscription>{discription}</CardDiscription>
      <LearnMore>Learn More</LearnMore>
    </CardContainer>
  );
};

export default Allcards;
