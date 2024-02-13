import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: 20px 80px 40px 80px;
  padding: 30px 10px 30px 10px;
  background-color: rgba(0, 0, 150, 0.15);
  border-radius: 8px;
  border: 1px solid #cecece;
  height: 320px;
  width: 270px;
  color: #b7b6bd;

  &:hover {
    background-color: #c7cee8;
  }

  &:hover p {
    color: #263238;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 10px;
`;

export const CardNumber = styled.h1`
  font-size: 20px;
  color: #33499e;
`;

export const CardTitle = styled.h1`
  margin-left: 10px;
  font-size: 16px;
  color: #2b459b;
  padding-top: 3px;
`;

export const CardParagraph = styled.p`
  margin: 50px 0 50px 0;
  font-size: 13px;
  line-height: 1.5em;
`;

export const Button = styled.button`
  background-color: #254989;
  font-size: 14px;
  color: #ffffff;
  padding: 8px 40px 8px 40px;
  outline: none;
  border-width: 0px;
  border-radius: 20px;
  align-self: center;
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 40%;
  width: 360px;
  background-color: #254989;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const Close = styled.button`
  background-color: transparent;
  border: 0px;
  outline: none;
  align-self: flex-end;
`;

export const PopupTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  margin-bottom: 10px;
`;

export const PopupImage = styled.img`
  height: 120px;
  width: 120px;
  margin: 0px;
`;

export const CloseImg = styled.img`
  height: 10px;
  width: 10px;
`;

export const PopupHeading = styled.h1`
  color: #cbcbcb;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 30px;
`;

export const PopupDesc = styled.p`
  color: #ffffff;
  font-size: 14px;
  padding: 20px;
  line-height: 1.25em;
  font-weight: 500;
`;
