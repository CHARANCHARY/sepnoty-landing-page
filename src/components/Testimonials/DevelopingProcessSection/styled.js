import styled from "styled-components";

export const BgContainer = styled.div`
  background-color: rgba(12, 17, 31, 1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
export const CardListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const Description = styled.p`
  font-family: "inter", sans-serif;
  font-size: 20px;
  color: #858585;
  width: 600px;
  font-weight: 500;
`;

export const Our = styled.span`
  color: #ffffff;
  background-color: #2b459b;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  padding: 5px 10px;
  font-weight: 500;
`;

export const Devl = styled.span`
  color: #b7b6bd;
  font-weight: bold;
`;

export const Process = styled.span`
  color: #2b459b;
`;

export const Heading = styled.h1`
  margin-bottom: 30px;
  font-size: 20px;
`;
