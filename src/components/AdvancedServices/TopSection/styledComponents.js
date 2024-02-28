import styled from "styled-components";

export const AdServices1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
  }
`;
export const AdSeviceLeftText = styled.div`
  display: flex;
  flex-direction: column;
  jusftify-content: center;
  align-self: center;
  padding: 30px;
`;
export const AdServiceLeftHeading = styled.h2`
  font-size: 30px;
  color: white;
  margin-top: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const AdServiceLeftHeading1 = styled.h2`
  font-size: 25px;
  color: white;
  margin-top: 150px;
  display: none;
  @media screen and (max-width: 768px) {
    display: inline;
    width: 300px;
  }
`;
export const AdServiceLeftHeadingBlue = styled.span`
  color: #4c64b2;
  font-size: 30px;
  @media screen and (max-width: 768px) {
    font-size: 25px;
    width: 300px;
  }
`;
export const AdServiceLeftDescript = styled.p`
  line-height: 35px;
  margin-top: 20px;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    font-size: 15px;
    line-height: 20px;
  }
`;
export const AdServiceRightPart = styled.div`
  text-align: right;
  @media screen and (max-width: 455px) {
    display: none;
  }
`;
export const AdServiceRightPart1 = styled.div`
  text-align: right;
  display: none;
  @media screen and (max-width: 455px) {
    display: flex;
  }
`;
export const AdServiceRightImg = styled.img`
  width: 600px;
  height: 650px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 455px) {
    width: 200px;
    height: 200px;
    margin-left: -100px;
  }
`;
export const AdServDots = styled.img`
  position: absolute;
  top: 50;
  left: 0;
  width: 350px;
  height: 200px;
  @media screen and (max-width: 455px) {
    top: 920px;
    width: 330px;
    height: 220px;
  }
`;
export const AdServRightDots = styled.img`
  position: absolute;
  top: 200;
  right: 0;
  z-index: 0;
  margin-top: 250px;
  height: 450px;
  @media screen and (max-width: 455px) {
    display: none;
  }
`;
