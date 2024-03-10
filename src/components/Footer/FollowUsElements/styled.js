import styled from "styled-components";

export const Logo = styled.img`

height: 13px;
    width: 13px;
    margin-right: 10px;
  @media screen and (max-width: 555px) {
      margin-bottom: 0px;
      margin-right: 0px;
      height: 18px;
      width: 18px;
  }
`;

export const Items = styled.li`

display: flex;
flex-direction: row;
margin-bottom: 10px;
@media screen and (max-width: 555px) {
  margin-bottom: 0px;
  }
`;

export const Name = styled.p`
  color: #d9d9d9;
  font-size: 14px;

  @media screen and (max-width: 555px) {
    display:none;
  }
`;
/* @media screen and (max-width: 576px) {
  .logo {
    height: 15px;
    width: 15px;
    margin-left: 10px;
    margin-right: 0px;
  }
} */
