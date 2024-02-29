import styled from "styled-components";
export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  align-self: flex-end;
`;

export const SearchHeading = styled.p`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
`;
export const SearchHolder = styled.div`
  dispaly: flex;
  flex-direction: row;
  border: 1px solid #8196db;
  background-color: transparent;
  padding: 5px;
  border-radius: 10px;
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