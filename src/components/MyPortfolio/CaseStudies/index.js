import {
  Desc,
  Title,
  DesignList,
  DesignImg,
  DetailsSontainer,
  Button,
  Arrow,
} from "./styled";

import arrow from "../images/arrow.png";
const CaseStudy = (props) => {
  const { details } = props;
  const { title, desc, image } = details;
  return (
    <DesignList>
      <DesignImg src={image} alt="case" />
      <DetailsSontainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Button>
          See Project details
          <Arrow src={arrow} alt="arrow" />{" "}
        </Button>
      </DetailsSontainer>
    </DesignList>
  );
};

export default CaseStudy;
