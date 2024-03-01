import React from 'react'
import {
  SubCardSection,
} from './styled';


const SubCard = (props) => {
  const { details } = props;
  const {name,about} = details;

  return (
    <SubCardSection>
    <h2>{name}</h2>
    <h3>{about}</h3>
    </SubCardSection>
  );
};

export default SubCard
