import styled from "styled-components";

export const TechCardContainer = styled.div`
  margin-right: 30px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  height: 100px;
  border: 1px solid white;
  border-radius: 10px;
  margin-bottom: 20px;
  position: relative;

  &::before {
    content: '\u2192'; /* Unicode for right arrow */
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    color: white;
  }
`;

export const TechImg = styled.img`
  width: 30px;
  height: 30px;
`;

export const TechAbout = styled.p`
  color: white;
  font-size: 10px;
  margin-top: 18px;
`;