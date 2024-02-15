import PropTypes from "prop-types";
import {
  OurWorkServiceCardContainer,
  OurWorkServiceImg,
  OurWorkGreenLine,
  OurWorkServiceDetails,
  OurWorkDescription,
} from "./styledComponents";
import "./index.css";

const Service = ({ details }) => {
  const { imageUrl, description } = details;

  return (
    <OurWorkServiceCardContainer>
      <OurWorkServiceImg src={imageUrl} alt="Service" />
      <OurWorkGreenLine />
      <OurWorkServiceDetails>
        <OurWorkDescription>{description}</OurWorkDescription>
      </OurWorkServiceDetails>
    </OurWorkServiceCardContainer>
  );
};

Service.propTypes = {
  details: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Service;
