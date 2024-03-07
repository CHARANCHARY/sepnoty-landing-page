import styled from "styled-components";

export const Container = styled.div`
  background-color: #0c111f;
  padding: 10px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dfe3f0;
  align-items: center;
  border-radius: 10px;
  margin-left: 10%;
  width: 80%;
  margin-top: 10vh;
  @media screen and (max-width: 455px) {
    width: 100%;
    margin-left: 0%;
    height: 20px;
    margin-top: 5vh;
    margin-left: 1%;
  }
`;

export const Image = styled.img`
  height: 30px;
  width: 30%;
  padding: 0px 30px 0px 30px;
  border-right: 1px solid #abaaaa;
  @media screen and (max-width: 455px) {
    height: 20px;
    width: 55px;
    padding: 0px 10px 0px 10px;
    border-right: 1px solid #abaaaa;
  }
`;

export const Img = styled(Image)`
  border: 0px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 30vh;
`;

export const Heading = styled.h1`
  font-size: 30px;
  color: #4c64b2;
  font-weight: bold;

  margin-bottom: 10px;
  @media screen and (max-width: 455px) {
    font-size: 18px;
    margin-top: 10px;
    margin-left: -30px;
    margin-bottom: 0px;
  }
`;

export const Description = styled.p`
  font-size: 18px;
  color: #b7b6bd;
  font-weight: bold;
  width: 620px;
  padding-right: 0px;
  padding-top: 60px;
  line-height: 1.5em;
  @media screen and (max-width: 455px) {
    font-size: 15px;
    width: 320px;
    padding-right: 10px;
    padding-top: 30px;
    line-height: 1.5em;
    margin-left: -30px;
  }
`;

export const Pattern = styled.img`
  position: absolute;
  top: 200;
  right: 0;
  z-index: 0;
  height: 50%;
  width: 30%;
`;

export const CuateImage = styled.img`
  width: 30%;

  z-index: 1;
  @media screen and (max-width: 455px) {
    display: none;
  }
`;

export const CuateImage11 = styled.img`
  width: 50%;
  height: 120px;
  position: relative;
  margin-top: -150px;
  margin-left: auto;
  display: none;
  margin-right: -60px;
  @media screen and (max-width: 455px) {
    display: flex;
  }
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
