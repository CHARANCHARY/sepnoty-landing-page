import styled from "styled-components";
import { useState } from "react";

const EightthPage = () => {
    const [current,setCurrent] = useState("Any");
    const handleButtonClick = (page) => {
        setCurrent(page)
    }
    return(
        <M> 
        <Main><P1>
        Almost done!
        </P1>
        <P2>
        Please let us know where we should send your estimate. Our experts may need to ask a few extra questions to calculate a precise quote for your case.
        </P2>
        <P3>Your contact data</P3>
        <M2>
            <M3>
                <P4>*Full name</P4>
                <Input/>
            </M3>
            <M3>
                <P4>*Company name</P4>
                <Input/>
            </M3>

        </M2>
        <br/>
        <br/>
        <M2>
            <M3>
                <P4>*Work email</P4>
                <Input/>
            </M3>
            <M3>
                <P4>*Phone number</P4>
                <Input/>
            </M3>

        </M2><br/>
        <M33>
            <P4>Preferred way of communication:</P4>
            <Button1 type="button" active={current === 'Any'}  onClick={() => handleButtonClick('Any')}>Any</Button1>
            <Button2 type="button" active={current === 'Email'}  onClick={() => handleButtonClick('Email')}>Email</Button2>
            <Button3 type="button" active={current === 'Phone'}  onClick={() => handleButtonClick('Phone')} >Phone</Button3>
        </M33>
        <br/>
        <M3>
            <Input1 type="checkbox" id="1" />
            <Label htmlFor="1">I agree to have Sepnoty contact me Via email, Phone, Messenger.</Label>

        </M3>
        <br/>
        <M3>
            <Input1 type="checkbox" id="2" />
            <Label htmlFor="2">I agree to have Sepnoty provide my request information to sepnoty affiliated development
centres.</Label>


        </M3>
        <br/>
        <P5>Your personal data will be stored for ten years on US servers in accordance with GDPR, and erased thereafter. 
We'll share it with our development centre to address your request, ensuring GDPR compliance at both locations. 
Refer to our <Span>Privacy Policy</Span> for details.</P5>
        </Main>
        
        </M>
    )
}
export default EightthPage;
const M0 = styled.div`

`








const Input1 = styled.input`
margin-left:-630px;
color: #C1CAE7;
cursor: pointer;

`;
const M = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius: 10px;
width: 800px;
margin-left: -80px;
`;
const Main = styled.div`
height:550px;
width: 800px;
padding: 30px 40px 10px 40px;
background-color:#C1CAE7;
display:flex;
flex-direction:column;
border-radius: 10px;
border: 1px solid #C1CAE7;
margin-left:0px;
`
const P1 = styled.p`
font-size: 18px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color:#2B459B;

`
const P2 = styled.div`
margin-left:30px;
margin-top:-10px;
margin-right:30px;
color:#263238;
line-height: 30px;
letter-spacing: 0em;
font-weight: 500;
margin-top:15px;
width: 80%;
`
const P3 = styled.p`
font-size: 16px;
font-weight: 700;

text-align: left;
color:#263238;
margin-left:30px;
margin-top: 15px;
margin-bottom: 0px;
`
const M2 = styled.div`
display:flex;
flex-direction:row;
gap:40px;
`
const M3 = styled.div`
display:flex;
flex-direction:column;
`;

const M33 = styled.div`
display:flex;
flex-direction:row;
`;


const P4 = styled.p`

font-family: Inter;
font-size: 18px;

font-size: 15px;

font-weight: 700;
margin-right: 30px;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color:#263238;
margin-left:30px;
margin-bottom: 15px;
`
const Input = styled.input`
margin-left:30px;
margin-top:-15px;
background:transparent;
border: 1px solid #8C8C8C;
width:180px;
height: 30px;
margin-bottom: -90px
border-radius: 3px;
`
const Button1 = styled.button`

margin-left:330px;

margin-top:-35px;

margin-top:-45px;

background-color: ${(props) => (props.active ? 'blue' : 'white')};
color: ${(props) => (props.active ? 'white' : 'black')};
width:60px;
border-radius:5px;
font-size:12px;
height:20px;


background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
width: 80px;
border: 1px solid #8C8C8C;
border-top-left-radius:10px;
border-bottom-left-radius:10px;
font-size:17px;
height: 30px;


`
const Button2 = styled.button`
margin-left:0px;
margin-top: 0px;
background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
border: 1px solid #8C8C8C;
width:80px;
height: 30px;
`
const Button3 = styled.button`
background-color: ${(props) => (props.active ? '#2B459B' : '#C1CAE7')};
color: ${(props) => (props.active ? 'white' : 'black')};
border: 1px solid #8C8C8C;
width: 80px;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
height: 30px;
`;
const Label = styled.label`
color:#263238;
font-weight: 500;
font-size: 13px;
margin-left:60px;
margin-top:-15px;
`
const Span = styled.span`
color:#BC2424;
`
const P5 = styled.p`

font-size:12px;

font-size:13px;
line-height: 1.5;
line-space: 20px;
font-weight: 600;

margin-left:40px;

margin-left:20px;

color:#263238;
`