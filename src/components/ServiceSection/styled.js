import styled from "styled-components";

export const ServiceContainer = styled.div`
  background-color: #c1cae7;
  padding: 40px 0px 20px 0px;
  width: 100vw;
  border-radius: 10px;
`;

export const ServiceItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 30px 0px 40px;
  margin-right: 30px;
`;
export const Heading = styled.h1`
  font-weight: 700;
  font-size: 18px;
  color: #2b459b;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #263238;
  width: 450px;
  padding: 15px 40px 0px 0px;
`;

export const SerImg = styled.img`
  height: 130px;
  width: 165px;
  margin-left: 70px;
`;

export const Services = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #263238;
  width: 70px;
  margin-bottom: 0px;
`;

export const ServiceItem = styled.p`
  font-weight: 500;
  font-size: 13px;
  color: #263238;
  margin-bottom: 15px;
  margin-right: 30px;
`;

export const BreakLine = styled.hr`
  color: #8c9091;
  border: 1px solid #8c9091;
  margin-top: -10px;
`;

export const SearchSuggestion = styled.h1`
  font-weight: 600;
  font-size: 16px;
  color: #263238;
  text-align: center;
  padding-bottom: 10px;
  margin-right: 50px;
`;

export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 7%;
`;

export const SearchContainer = styled.div`
  dispaly: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #8196db;
  background-color: transparent;
  padding: 5px;
  border-radius: 10px;
  align-self: center;
  margin-left: 140px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0px;
  width: 410px;
  color: #263238;

  &::placeholder {
    color: #263238;
    font-size: 14px;
    font-weight: 500;
    padding: 5px;
  }
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;

export const ServiceItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 220px;
  flex-wrap: wrap;
`;

export const Border = styled.hr`
  border: 1px solid #2b459b;
  align-self: center;
  width: 60px;
  margin-left: 8px;
  margin-bottom: 10px;
`;

export const Items = styled.div`
  dispaly: flex;
  flex-direction: column;
`;
