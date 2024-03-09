import Styled from 'styled-components';
import React, { useState } from 'react';
import ApplicationPage from '../AllForms/Website';
import WebsitePage from '../AllForms/Website';
import SoftwarePage from "../AllForms/Software";



function MainPage() {
  const [currentPage, setCurrentPage] = useState("website");
  
  const handleButtonClick = (page) => {
    setCurrentPage(page);
   
  };
  

  return (
    <ButtonCon >
      <div>
      <  ActiveButton active={currentPage === 'website'}  onClick={() => handleButtonClick('website')}>Website</ActiveButton>
        <Buttonel active={currentPage === 'application'}   onClick={() => handleButtonClick('application')}>Application</Buttonel>
        <Butt active={currentPage === 'software'}  onClick={() => handleButtonClick('software')}>Software</Butt>
      </div>
      <FormContainer>
        {currentPage === 'application' && <ApplicationPage />}
        {currentPage === 'website' && <WebsitePage />}
        {currentPage === 'software' && <SoftwarePage />}
      </FormContainer>
    </ButtonCon>
  );
}

export default MainPage;

const ActiveButton = Styled.button`
background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
width: 100px;
border: 1px solid #8C8C8C;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
font-size:19px;
height: 45px;

`;

const Buttonel = Styled.button`
background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
width: 110px;
border: 1px solid #8C8C8C;

font-size:19px;
height: 45px;


`;

const Butt = Styled.button`
background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
width: 100px;
border: 1px solid #8C8C8C;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
font-size:19px;
height: 45px;

`;
const ButtonCon = Styled.div`
display: flex;
flex-direction: row;
margin-top: -30px;
padding: 60px;
`;
const FormContainer = Styled.div`
margin-top:10%;
`
