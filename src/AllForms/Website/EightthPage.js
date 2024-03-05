import styled from "styled-components";

const EightthPage = () => {
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
        <M3>
            <P4>Preferred way of communication:</P4>
            <Button1>Any</Button1>
            <Button2>Email</Button2>
            <Button3>Phone</Button3>
        </M3>
        <br/>
        <M3>
            <Input1 type="checkbox" id="1" />
            <Label htmlFor="1">I agree to have Sepnoty contact me Via email, Phone, Messenger.</Label>

        </M3>
        <br/>
        <M3>
            <Input1 type="checkbox" id="1" />
            <Label htmlFor="1">I agree to have Sepnoty provide my request information to sepnoty affiliated development
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

const Input1 = styled.input`
margin-left:-500px;
`
const M = styled.div`
display:flex;
justify-content:center;
align-items:center;
`
const Main = styled.div`
height:500px;
width:600px;
background-color:#C1CAE7;
display:flex;
flex-direction:column;
border: 1px solid #C1CAE7;
margin-left:30px;
`
const P1 = styled.p`
font-family: Inter;
font-size: 18px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color:#2B459B;
margin-left:30px;
`
const P2 = styled.div`
margin-left:30px;
margin-top:-10px;
margin-right:30px;
color:#263238;
font-weight:500;
`
const P3 = styled.p`
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color:#263238;
margin-left:30px;
margin-top:5px;
`
const M2 = styled.div`
display:flex;
flex-direction:row;
gap:40px;
`
const M3 = styled.div`
display:flex;
flex-direction:column;
`
const P4 = styled.p`
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color:#263238;
margin-left:30px;
margin-top:-10px;
`
const Input = styled.input`
margin-left:30px;
margin-top:-15px;
background:transparent;
border: 1px solid #8C8C8C;
width:200px;
`
const Button1 = styled.button`
margin-left:330px;
margin-top:-45px;
background: #2B459B;
width:60px;
border-radius:5px;
color:white;
font-size:12px;
height:20px;

`
const Button2 = styled.button`
margin-left:380px;
margin-top:-21px;
background:transparent;
border: 1px solid #8C8C8C;
width:60px;
left:-30px;
`
const Button3 = styled.button`
margin-left:440px;
margin-top:-23px;
background:transparent;
border: 1px solid #8C8C8C;
width:60px;
left:-30px;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
`
const Label = styled.label`
color:#263238;
margin-left:60px;
margin-top:-20px;
`
const Span = styled.span`
color:#BC2424;
`
const P5 = styled.p`
font-size:12px;
margin-left:20px;
`