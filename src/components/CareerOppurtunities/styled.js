import styled from "styled-components";

export const CareerContainer = styled.div`
  background-color: #c1cae7;
  padding: 40px 0px 20px 0px;
  width: 99vw;
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
  margin-right: 20px;
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
  width: 430px;
  padding: 20px 30px 0px 0px;
`;

export const CareerImg = styled.img`
  height: 155px;
  width: 230px;
  margin-left: 70px;
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
  padding-bottom: 10px;
  margin-right: 50px;
`;

export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-right: 10%;
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

export const DeveloperItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  flex-wrap: wrap;
`;

export const Developer = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #263238;
  margin-bottom: 5px;
`;

export const Item = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #263238;
  margin-bottom: 15px;
  margin-right: 30px;
`;

export const Border = styled.hr`
  border: 1px solid #2b459b;

  width: 80px;
  margin-left: 20px;
  margin-bottom: 15px;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  padding-right: 30px;
  margin-right: 30px;
`;
