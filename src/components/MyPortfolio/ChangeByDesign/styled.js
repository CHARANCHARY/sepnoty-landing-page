import styled from "styled-components";
export const Image = styled.img`
  height: 50vh;
  width: 100vw;
`;
export const Container = styled.div`
  background-color: #0c111f;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`;
export const PortfolioHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 10px;
`;

export const Desc = styled.p`
  color: #ffffff;
  font-size: 15px;
  line-height: 1.5;
  width: 70%;
`;

export const SmallPattern = styled.div`
  background-color: #33406d;
  height: 40px;
  width: 40px;
`;

export const PatternCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;
export const ListHeading = styled.h1`
  font-size: 18px;
  color: #8196db;
  font-weight: bold;
  margin-left: -15px;
`;

export const ContentDesc = styled.p`
  color: #ffffff;
  font-size: 15px;
  margin-left: 55px;
  width: 60%;
  margin-bottom: 15px;
  line-height: 1.5;
`;

export const SolutionDesc = styled.p`
  color: #ffffff;
  font-size: 15px;
  height: 60px;
  padding-top: 20px;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Bgimage = styled.img`
  position: relative;
  width: 100%;
  margin: 50px 0;
`;
export const DesignImage = styled.img`
  width: 83%;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  background-color: transparent;
  border: 1px solid #8196db;
  color: #ffffff;
  border-radius: 5px;
  font-size: 14px;
  padding: 7px 5px;
  margin-right: 10px;
`;

export const TechCon = styled.div`
  border-left: 1px solid #8196db;
  padding: 0px 0px;
  height: 60px;
  padding: 5px;
  margin: 20px 0 30px 0;
`;

export const Techtitle = styled.p`
  color: rgba(217, 217, 217, 0.5);
  font-size: 14px;
`;

export const SubCon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MoreCaseStudies = styled.button`
  border-radius: 10px;
  background-color: #d9d9d9;
  border: 0px;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 40px;
  align-self: center;
  color: #121415;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 30px;
`;

export const ContentContainer = styled.div`
  margin-left: 7%;
  margin-top: 10px;
`;

export const Contents = styled.div`
  padding-left: 1%;
  margin-bottom: 30px;
`;
