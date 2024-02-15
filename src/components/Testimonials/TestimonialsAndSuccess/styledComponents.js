import styled from "styled-components";

export const TopContainer = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;
  padding: 30px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  height: 60vh;
  margin-top: 20px;
`;

export const StoriesContainer = styled.div`
  display: flex;
  height: 60%;
  flex-direction: column;
  justify-content: space-around;
  border-right: 1px solid #c0c2ce;
  width: 700px;
`;

export const Heading = styled.h1`
  font-family: "Inter", serif sans;
  font-size: 23px;
  color: #383721;
  margin-bottom: -10px;
`;

export const ConsumerCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: -30px;
`;

export const CR = styled.h1`
  color: #365899;
  font-family: "Inter", "serif sans";
  font-size: 40px;
  font-weight: bolder;
  margin-right: 10px;
`;

export const CrEle = styled.p`
  margin: -7px;
  padding: 0px;
  color: #383721;
  font-size: 17px;
`;

export const Desc = styled.p`
  color: #878787;
  font-size: 15px;
  width: 280px;
  text-shadow: 0px 1px 1px;
`;

export const MainContainer = styled.div`
  background: white;
  margin-bottom: 20px;
`;

export const Sliders = styled.div`
  margin-left: 0px;
`;
