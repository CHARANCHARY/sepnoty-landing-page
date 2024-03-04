import styled from "styled-components";

export const DigitalContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
  padding-bottom: 20px;
`;
export const Header = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 5%;
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Service = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 10px 30px 20px 5%;
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 10px 0px 4% 5%;
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
  padding-top: 20px;
`;

export const ConRecDesc = styled.p`
  font-size: 20px;
  color: #ffffff;
  width: 50%;
  padding: 20px 30px 30px 0px;
`;

export const Button = styled.button`
  background-image: linear-gradient(to right, #ffffff, #fff741);
  padding: 5px 25px 5px 25px;
  border-radius: 20px;
  color: #234581;
  border: 0px;
  outline: none;
  font-size: 13px;
  margin-top: 20px;
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 65%;
  width: 37%;
  top: 12%;
  z-index: 0;
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 16%;
  height: 78%;
  width: 60%;
  top: -5%;
  z-index: 0;
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 38%;
  z-index: 0;
  margun-bottom: 20px;
`;

export const ListHeading = styled.h1`
  font-size: 20px;
  color: #2b459b;
  font-weight: bold;
  margin-left: -25px;
`;

export const ServiceItemCon = styled.div`
  margin-top: 10%;
`;

export const ItemCon = styled.div``;

export const ServiceItemDesc = styled.p`
  margin-bottom: 30px;
  font-size: 17px;
  color: #ffffff;
  width: 60%;
  text-align: justify;
  padding-left: 2.5%;
  line-height: 1.5;
`;

export const ImageCon = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  padding-left: 2.5%;
`;
export const ServiceItemImg = styled.img`
  width: 100%;
  margin: 0px;
  margin-bottom: -20px;
`;

export const ServiceItemButton = styled.button`
  width: 100%;
  background-color: #a4a4a4;
  margin-top: -13px;
  color: #2b459b;
  font-size: 15px;
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  padding: 10px 0 10px 0;
`;

export const ServiceItemDetails = styled.div`
  margin: 20px 5% 4% 5%;
`;

export const ConatctCon = styled.div`
  background-color: #d4daf0;
  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 330px;
  height: 200px;
  border-radius: 7px;
  padding: 20px 15px 20px 30px;
  margin: 30px 1px 30px 01px;
`;

export const CardHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  flex-flow: wrap;
`;
export const Logo = styled.img`
  height: 23px;
  width: 23px;

  border: 0px;
`;
export const PostHeading = styled.h1`
  color: #2b459b;
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;
export const PostCon = styled.div`
  background-color: #000000;
  ${"" /*   //margin: 10px 7%; */}
  padding-top: 40px;
  border-radius: 5px;
  width: 80%;
  align-self: center;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
export const CardTitle = styled.p`
  color: #171717;
  font-size: 13px;
  font-weight: 500;
`;

export const ToolsCon = styled.div`
  margin: 20px 5% 4% 5%;
`;

export const ToolsCardCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-flow: wrap;
  margin: 0 7% 0 8%;
`;

export const ToolsCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #d9d9d9;
  width: 33%;
  height: 200px;
  border-radius: 7px;
  padding: 20px 15px 20px 30px;
  margin: 30px 30px 30px 30px;
`;

export const ToolTitle = styled.h1`
  font-size: 16px;
  color: #000000;
  margin-left: 5px;
`;

export const CropBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(200, 0, 0, 0.5);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const TrimBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 255, 0.2);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const EditerBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 255, 0, 0.3);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const FocusBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(89, 235, 255, 0.5);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;
export const ClipBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(237, 169, 87, 0.4);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;

export const GradingBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(139, 74, 228, 0.53);
  padding: 3px 7px 3px 7px;
  margin-right: 10px;
  border-radius: 3px;
`;
export const SmallPattern = styled.div`
  background-color: rgba(129, 150, 219, 0.25);
  height: 50px;
  width: 60px;
  border-radius: 3px;
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;

export const CorporateItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`;
