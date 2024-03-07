import Styled from "styled-components"
const FourthPage = () => {
    return(
        <Main>
            <Form1>
                <Heading>
                *Do you have UI design mockups?
                </Heading>
                <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="industry" value="Healthcare"/>
Yes
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    I will engage third party for UI design
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Manufacturing"/>
    I will need you to provide UI design
    </Label>
</InputContainer>
                </Form2>

                
            </Form1>
            <Form1>
            <Heading>
            *Have you chosen a CMS?
                </Heading>
            <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="industry" value="Healthcare"/>
No
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Finanacial"/>
    <Input1 type="text" placeholder="Yes (Please Specify)"/>
    </Label>
</InputContainer>

                </Form2>
            </Form1>
        </Main>
    )
}
export default FourthPage;

const Main = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`
const Form1 = Styled.div`
display:flex;
flex-direction:column;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:-20px;
border-radius:10px;
padding:20px;
height:350px;
width:400px;
`
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font-family:Roboto;
margin-bottom:30px;
`
const Form2 = Styled.form`

`
const Input = Styled.input`
margin-right:10px;
`
const InputContainer=Styled.div`
margin-top:10px;
`
const Label = Styled.label`

font-size:16px;
font-family: Roboto;

font-size:17px;
font-family: Inter;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Input1 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
`
// const Input2 = Styled.input`
// background: #C1CAE7;
// border: 1px solid gray;
// `