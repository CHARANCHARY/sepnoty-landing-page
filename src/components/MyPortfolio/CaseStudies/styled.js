import styled from "styled-components";

export const DesignList = styled.li`
  display: flex;
  flex-direction: row;
  background-color: #d9d9d9;
  margin-bottom: 30px;
`;

export const DesignImg = styled.img`
  width: 10%;
  height: 150px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: #121415;
  margin-bottom: 10px;
`;

export const Desc = styled.p`
  font-size: 16px;
  color: #121415;
  margin-bottom: 10px;
`;

export const DetailsSontainer = styled.div`
  margin: 10px 0 0px 50px;
  width: 50%;
`;

export const Button = styled.button`
  background-color: #2b459b;
  border: 0px;
  outline: none;
  padding: 10px 20px 10px 15px;
  border-radius: 10px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Arrow = styled.img`
  height: 13px;
  width: 15px;
  margin-left: 6px;
`;
