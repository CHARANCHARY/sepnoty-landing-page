import styled from "styled-components";

export const OurWorkContainer = styled.div`
  background-color: #0c111f;
  padding: 30px;
  align-items: center;
  text-align: center;
`;

export const OurWorkHeading = styled.h1`
  font-size: 30px;
  align-self: center;
  text-align: center;
  margin-bottom: 30px;
  color: #4c64b2;
`;

export const OurWorkList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;

  @media screen and (max-width: 608px) {
    flex-direction: column;
  }
`;

export const OurWorkServiceCardContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  margin-left: 30px;
  box-sizing: border-box;
  width: 380px;
  align-items: center;
`;

export const OurWorkServiceImg = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  margin-right: 30px;
`;

export const OurWorkGreenLine = styled.hr`
  height: 6px;
  border-radius: 7px;
  width: 110px;
  background-color: #2b459b;
  border: 0px;
  margin-right: 30px;
`;

export const OurWorkServiceDetails = styled.div`
  margin-top: 10px;
`;

export const OurWorkDescription = styled.p`
  font-size: 15px;
  color: #b7b6bd;
  text-align: left;

  padding: 20px;
`;

export const OurWorkTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  line-height: 20px;
`;
export const OurWorkOur = styled.h2`
  color: #b7b6bd;
`;
export const OurWorkOurText = styled.span`
  background-color: #2b459b;
  color: #ffffff;
  padding: 2px 4px;
  border-radius: 9px 0px 0px 9px;
`;
export const OurWorkText = styled.span`
  color: #2b459b;
`;
export const OurWorkPara = styled.p`
  font-size: 20px;
  font-family: Roboto;
  color: #b7b6bd;
  line-height: 25px;
  margin-top: 40px;
`;

export const OurWorkCard = styled.div`
  width: 450px;
  height: 300px;
  background-color: #dfe3f0;
  margin-left: 34%;
  border-radius: 10px;
  text-align: center;
  box-shadow: rgba(43, 69, 155, 1);
  padding: 35px 20px 0px 20px;
  margin-top: 20px;
`;
export const OurWorkCardTitle = styled.h1`
  color: #2b459b;
  text-align: center;
  font-size: 15px;
`;
export const OurWorkButton = styled.button`
  padding: 15px 30px;

  margin: 30px;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  background-color: #2b459b;
`;
export const OurWorkSideHeading = styled.h1`
  color: #263238;
  font-size: 16px;
  text-align: left;
  margin-top: 10px;
  font-weight: bolder;
`;
export const OurWorkThreeCol = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  margin-right: 50px;
`;
export const Details = styled.h4`
  font-weight: bold;
  color: #263238;
  font-size: 16px;
  align-self: flex-start;
`;

export const Detail = styled.p`
  font-weight: 500;
  color: #263238;
  font-size: 14px;
  margin-top: 30px;
`;

export const OurWorkEl = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Pattern = styled.img`
  position: absolute;
  top: 100;
  margin-top: 20px;
  margin-left: -100px;
  width: 350px;
  height: 250px;
`;
