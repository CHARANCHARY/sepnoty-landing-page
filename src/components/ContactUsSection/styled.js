import styled from "styled-components";

export const Container = styled.div`
  background-color: #c1cae7;
  padding: 30px 70px 20px 100px;
  width: 60vw;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ContactImg = styled.img`
  height: 200px;
  width: 200px;

  margin-bottom: 50px;
`;

export const Data = styled.p`
  font-size: 16px;
  color: #263238;
  font-weight: 500;
  padding-bottom: 30px;
  cursor: pointer;
  &:hover {
    color: #2b459b;
  }
`;
