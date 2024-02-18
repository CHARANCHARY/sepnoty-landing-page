import styled from "styled-components";

export const CareerContainer = styled.div`
  background-color: #c1cae7;
  padding: 40px 0px 20px 0px;
  width: 98vw;
  border-radius: 10px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Career = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px 30px 0px 40px;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 22px;
  color: #2b459b;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #263238;
  width: 450px;
  padding: 20px 30px 0px 0px;
`;

export const CareerImg = styled.img`
  height: 165px;
  width: 250px;
  margin-left: 70px;
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

export const DeveloperItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  flex-wrap: wrap;
`;

export const Developer = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: #263238;
  margin-bottom: 5px;
`;

export const Item = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #263238;
  margin-bottom: 10px;
  margin-right: 30px;
`;

export const Border = styled.hr`
  border: 1px solid #2b459b;
  align-self: center;
  width: 100px;
  margin-left: 33px;
  margin-bottom: 0px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding-right: 30px;
  margin-right: 30px;
`;
