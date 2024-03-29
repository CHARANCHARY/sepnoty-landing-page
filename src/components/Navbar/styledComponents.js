import styled from "styled-components";

export const LogoImg = styled.img`
  width: 180px;
  cursor: pointer;
  display: flex;
  top: -6px;
  left: 35px;
  @media screen and (max-width: 555px) {
    position: static;
    display: ;
  }
  position: absolute;
`;

export const AboutCon = styled.div`
  @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    background-color: #f9f9f9;
    top: 10;
    border-radius: 10px;

    left: 0;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 3;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ServiceCon = styled.div`
  display: block;
  position: fixed;
  background-color: #f9f9f9;
  top: 10;
  border-radius: 10px;

  left: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const BlogCon = styled.div`
  display: block;
  position: fixed;
  background-color: #f9f9f9;
  top: 10;
  border-radius: 10px;
  right: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const CareerCon = styled.div`
  display: block;
  position: fixed;
  background-color: #f9f9f9;
  top: 10;
  border-radius: 10px;
  left: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const ResourceCon = styled.div`
  display: block;
  position: fixed;
  background-color: #f9f9f9;
  top: 10;
  border-radius: 10px;
  right: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DownArrow = styled.img`
  height: 8px;
  width: 8px;
  margin-left: 5px;
`;

export const ContactCon = styled.div`
  display: block;
  position: fixed;
  background-color: #f9f9f9;
  top: 10;
  border-radius: 10px;
  right: 0;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;