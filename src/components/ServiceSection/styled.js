import styled from "styled-components";

export const ServiceContainer = styled.div`
  @media screen and (min-width: 768px) {
    background-color: #c1cae7;
    padding: 40px 0px 20px 0px;
    width: 98vw;
    border-radius: 10px;
  }
`;

export const ServiceItemsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const Service = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 30px 0px 40px;
  }
`;
export const Heading = styled.h1`
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 22px;
    color: #2b459b;
  }
`;

export const Description = styled.p`
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    color: #263238;
    width: 450px;
    padding: 20px 30px 0px 0px;
  }
`;

export const SerImg = styled.img`
  @media screen and (min-width: 768px) {
    height: 150px;
    width: 194px;
    margin-left: 70px;
  }
`;

export const Services = styled.h1`
  @media screen and (min-width: 768px) {
    font-weight: 700;
    font-size: 20px;
    color: #263238;
    width: 70px;
    margin-bottom: -5px;
  }
`;

export const ServiceItem = styled.p`
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 16px;
    color: #263238;
    margin-bottom: 0px;
    margin-right: 20px;
  }
`;

export const BreakLine = styled.hr`
  @media screen and (min-width: 768px) {
    color: #8c9091;
    border: 1px solid #8c9091;
    margin-top: -10px;
  }
`;

export const SearchSuggestion = styled.h1`
  @media screen and (min-width: 768px) {
    font-weight: 600;
    font-size: 20px;
    color: #263238;
    text-align: center;
    padding-bottom: 10px;
  }
`;

export const SearchSuggestionContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
`;

export const SearchContainer = styled.div`
  @media screen and (min-width: 768px) {
    dispaly: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #8196db;
    background-color: transparent;
    padding: 5px;
    border-radius: 10px;
    align-self: center;
    margin-left: 120px;
  }
`;

export const Input = styled.input`
  @media screen and (min-width: 768px) {
    background-color: transparent;
    outline: none;
    border: 0px;
    width: 410px;

    &::placeholder {
      color: #263238;
      font-size: 14px;
      font-weight: 500;
      padding: 5px;
    }
  }
`;

export const SearchIcon = styled.img`
  @media screen and (min-width: 768px) {
    height: 15px;
    width: 15px;
  }
`;

export const ServiceItemContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 300px;
    flex-wrap: wrap;
  }
`;

export const Border = styled.hr`
  @media screen and (min-width: 768px) {
    border: 1px solid #2b459b;
    align-self: center;
    width: 60px;
    margin-left: 8px;
    margin-bottom: 0px;
  }
`;

export const Items = styled.div`
  @media screen and (min-width: 768px) {
    dispaly: flex;
    flex-direction: column;
  }
`;
