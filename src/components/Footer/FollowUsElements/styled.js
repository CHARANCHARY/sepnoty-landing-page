import styled from "styled-components";

export const Logo = styled.img`
  @media screen and (min-width: 768px) {
    height: 13px;
    width: 13px;
    margin-right: 10px;
  }
`;

export const Items = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  @media screen and (min-width: 768px) {
    color: #d9d9d9;
    font-size: 14px;
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
