import styled from "styled-components";

export const Container = styled.div`
  background-color: #0c111f;
  padding: 30px;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #dfe3f0;
  align-items: center;
  border-radius: 10px;
  margin-left: 10%;
  width: 80%;
  margin-bottom: 30px;
`;

export const Image = styled.img`
  height: 30px;
  width: 30%;
  padding: 0px 30px 0px 30px;
  border-right: 1px solid #abaaaa;
`;

export const Img = styled(Image)`
  border: 0px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 30px;
  margin-top: 80px;
`;

export const Heading = styled.h1`
  font-size: 30px;
  color: #4c64b2;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  font-size: 20px;
  color: #b7b6bd;
  font-weight: bold;
  width: 620px;
  padding-right: 30px;
  padding-top: 60px;
  line-height: 1.5em;
`;

export const Pattern = styled.img`
  position: absolute;
  top: 200;
  right: 0;
  z-index: 0;
  height: 330px;
`;

export const CuateImage = styled.img`
  width: 60%;
  height: 400px;
  position: relative;
  margin-top: 80px;
  margin-left: 200px;
  z-index: 1;
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
