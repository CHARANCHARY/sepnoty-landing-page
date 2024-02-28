import styled from "styled-components";

export const Container = styled.div`
  background-color: #c1cae7;
  padding: 30px 0px 20px 0px;
  width: 99vw;
  border-radius: 10px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const MvContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px 0px 40px;
`;

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 18px;
  color: #2b459b;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 15px;
  color: #263238;
  width: 520px;
  padding: 20px 30px 0px 0px;
`;

export const MvImg = styled.img`
  height: 120px;
  width: 194px;
  margin-left: 70px;
`;

export const Section = styled.h1`
  font-weight: 700;
  font-size: 16px;
  color: #263238;
`;

export const SectionItem = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #263238;
  margin-bottom: 20px;
`;

export const Item = styled.p`
  font-weight: 500;
  font-size: 12px;
  color: #263238;
  width: 170px;
  margin-bottom: 20px;
`;

export const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
  margin-right: 30px;
`;

export const FollowUsCon = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin: 0px;
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
  margin-right: 120px;
  padding-bottom: 10px;
`;

export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  margin-left: 3%;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #8196db;
  background-color: transparent;
  padding: 5px;
  border-radius: 10px;
  margin-left: 80px;
`;

export const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: 0px;
  width: 410px;

  &::placeholder {
    color: #263238;
    font-size: 12px;
    font-weight: 500;
    padding: 5px;
  }
`;

export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
`;

export const Border = styled.hr`
  border: 1px solid #2b459b;
  align-self: center;
  width: 60px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

export const ApproachBorder = styled(Border)`
  align-self: start;
  margin-left: 10px;
`;
