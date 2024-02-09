import React, { useState } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 30%;
  overflow: hidden;
  max-height: ${({ isExpanded }) => (isExpanded ? 'none' : '150px')}; 

  transition: max-height 0.1s ease;

  &:hover {
    background: linear-gradient(#5beba3, #69b3c6);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardNumber = styled.h1`
  margin: 0;
  font-size: 24px;
  color: black;
`;

const CardTitle = styled.h1`
  margin-left: 10px;
  font-size: 18px;
  color: black;
`;

const CardParagraph = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.5;
  color: black;
  display:flex;
  flex-direction: column;
`;

const ReadMore = styled.span`
  cursor: pointer;
  color: red;
   margin-top:10px;
  &:hover {
    text-decoration: underline;
  }
`;

const CardItem = ({ cardsList }) => {
  const { title, description, id } = cardsList;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <CardContainer isExpanded={isExpanded}>
      <CardHeader>
        <CardNumber>0{id}</CardNumber>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardParagraph>
        {isExpanded ? description : description.slice(0, 100)}
        {/* (isExpanded ? description : ${description.slice(0, 100)}...) */}
        {!isExpanded && (
          <ReadMore onClick={handleReadMoreClick}>Read More</ReadMore>
        )}
      </CardParagraph>
    </CardContainer>
  );
};

export default CardItem;