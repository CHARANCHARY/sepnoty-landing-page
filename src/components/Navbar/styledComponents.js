import styled from "styled-components";

export const LogoImg = styled.img`
  height: 230px;
  width: 180px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;

    left: 35px;
  }
`;

export const AboutCon = styled.div`
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    top: 110%;
    border-radius: 10px;
    transform: translateX(-50%);
    left: 143%;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ServiceCon = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  top: 110%;
  border-radius: 10px;
  transform: translateX(-50%);
  left: 43%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const BlogCon = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  top: 110%;
  border-radius: 10px;
  right: -625%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const CareerCon = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  top: 110%;
  border-radius: 10px;
  transform: translateX(-50%);
  left: -78%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const ResourceCon = styled.div`
  display: block;
  position: absolute;
  background-color: #f9f9f9;
  top: 110%;
  border-radius: 10px;
  right: -103%;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DownArrow = styled.img`
  height: 8px;
  width: 8px;
  margin-left: 5px;
`;
