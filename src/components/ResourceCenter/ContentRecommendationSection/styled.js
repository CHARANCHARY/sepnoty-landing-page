import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #0c111f;
  padding-top: 70px;
`;

export const Header = styled.h1`
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  padding: 30px 20px 30px 5%;
`;
export const Span = styled.span`
  font-weight: 300;
  color: #ffffff;
`;

export const Resource = styled.h1`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  padding: 0px 30px 20px 5%;
`;

export const ContentRecomContainer = styled.div`
  background-image: linear-gradient(#1e3c72, #2a5298);
  padding: 3% 0px 3% 5%;
`;

export const ConRecHead = styled.h1`
  font-size: 30px;
  color: #ffffff;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const ConRecDesc = styled.p`
  font-size: 20px;
  color: #ffffff;
  width: 50%;
  padding: 20px 30px 30px 0px;
`;

export const Button = styled.button`
  background-image: linear-gradient(#ffffff, #fff741);
  padding: 5px 2px 5px 2px;
  border-radius: 20px;
  font-weight: 550;
  color: #234581;
  border: 0px;
  width: 120px;
  height: 30px;
  outline: none;
  font-size: 14px;
  margin-top: 20px;
`;

export const ListHeading = styled.h1`
  font-size: 22px;
  color: #2b459b;
  font-weight: bold;
  margin-left:  3%;
`;

export const SearchHeading = styled.p`
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  margin-bottom: 10px;
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
  width: 320px;
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
export const SearchSuggestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
  align-self: flex-end;
`;

export const FirstSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItems = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Rectangle1 = styled.img`
  position: absolute;
  right: 0;
  height: 70%;
  width: 38%;
  top: 15%;
  z-index: 0;
`;

export const Rectangle2 = styled.img`
  position: absolute;
  right: 18%;
  height: 80%;
  width: 60%;
  top: -5%;
  z-index: 0;
`;

export const Rectangle3 = styled.img`
  position: absolute;
  left: 0%;
  height: 40%;
  width: 17%;
  top: 39%;
  z-index: 0;
`;

export const Small = styled.img`
  position: absolute;
  left: 5.5%;
  height: 10%;
  width: 5%;
  top: 74%;
  z-index: 0;
`;

export const ContentContainer = styled.div`
  margin: 5em 2em 3em 5em;
`;

export const Small1 = styled.img`
  position: absolute;
  left: 5.5%;
  height: 10%;
  width: 5%;
  top: 145%;
  z-index: 0;
`;
