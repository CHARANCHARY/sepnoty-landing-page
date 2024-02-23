import Styled from "styled-components";
import Form from "./Form";
import Stars from "./images/Standing.svg"
import Image from "./images/Stars.svg"
import image2 from "./images/Stars2.svg"


const CostHome = () => {
    return (
        <Main2>
        <Main>
            <HomeContainer>
            <StarsImage src={Image}/>
                <SideContainer>
                <Heading>
                 Website development 
                </Heading>
                <Heading1>
                    Cost
                </Heading1>
                </SideContainer>
                <DevelopContainer>
                <Heading1>
                    Calculator
                </Heading1>
                <Para1>
                    To expedite the estimation of your website<br/> development cost, kindly provide some basic <br/>information about your business requirements<br/> by answering a few straightforward questions.<br/> This will assist our experts in offering a more<br/> accurate assessment.
                  </Para1>
                <Heading3>
                What type of development do you need?
                </Heading3>
                <ButtonCon>
      <ActiveButton>Website</ActiveButton>
      <div>
        <Buttonel>Application</Buttonel>
        <Butt>Software</Butt>
      </div>
    </ButtonCon>
                </DevelopContainer>
            </HomeContainer>
            <RightContainer>
            <Image2 src={Stars}/>
             <Image3 src={image2}/>
            </RightContainer> 
        </Main>
        <div>
          <Form/>
        </div>
        </Main2>
    )
}
export default CostHome;

 const ActiveButton = Styled.button`
  background-color: #2b459b;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  font-size: 20px;
  padding: 10px;
  color: #ffffff;
`;

const Buttonel =    Styled.button`
  font-size: 20px;
  background-color: #d9d9d9;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 10px;
  margin-left: -10px;
  border-right: 1px solid #9e9898;
`;

 const Butt = Styled.button`
  background-color: #d9d9d9;
  padding: 10px;
  font-size: 20px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;
const ButtonCon = Styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -30px;
  padding: 60px;
`;

const Main2 = Styled.div`
display:flex;
flex-direction:column;
background:#0C111F;
background-size:cover;

`

const Main = Styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width:100%;
background-color:#0C111F;
font-family:'Roboto';
@media screen and (max-width: 768px) {
      flex-direction: column;
  }
`
// const Button =Styled.div`
// back
// `
const HomeContainer = Styled.div`
display: flex;
flex-direction: column;
margin-top:20px;
`
// const Home2 = Styled.div`
// display: flex;
// flex-direction:column;
// justify-content: flex-start;

// `
const StarsImage = Styled.img`
margin-top:50px;
height: 70%;
width:70%;
opacity: 0.4px;
magrin-left:-110px;
`
const DevelopContainer = Styled.div`
margin-top:0px;
display:flex;
flex-direction:column;
margin-left:140px;
margin-button:-20px;
`
const Heading = Styled.h1`
color: #B7B6BD;
font-size: 40px;
margin-top:-10px;
`
const Heading1 = Styled.h1`
color:#4C64B2;
margin-top:-10px;
font-size: 40px;
`
// const ParaContainer = Styled.div`
// `
const Para1 = Styled.p`
font-size: 24px;
font-weight:500;
color:#B7B6BD;
margin-top:-20px;
`
const Heading3 = Styled.h1`
color:white;
font-size:32px;
margin-top:-10px;
`
const RightContainer = Styled.div`
text-align : right;
display:flex;
flex-direction:column;
`
const Image2 = Styled.img`
width:400px;
margin-top:200px;
height:650px;
z-index:1;
margin-left:auto;
`
const Image3 = Styled.img`
width:30%;
height:50%;
top:70%;
left:50%;
`
const SideContainer =   Styled.div`
display:flex;
flex-direction:row;
margin-top:10px;
gap:20px;
margin-left:140px;

`