import styled from "styled-components";

export const ServiceContainer = styled.div`
  background-color: #c1cae7;
`;

export const ServiceItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BreakLine = styled.hr`
  color: #8c9091;
  border: 1px solid #8c9091;
  margin-top: -10px;
`;

export const SearchSuggestion = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: #263238;
  text-align: center;
  padding-bottom: 10px;
`;

export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
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
  margin-left: 120px;
`;

export const Input = styled.input`
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
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;
