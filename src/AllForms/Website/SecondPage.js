import Styled from "styled-components"

const SecondForm = () => {
    return(
        <Main>
            <Form1>
                <Heading>
                *What is your industry?
                </Heading>
                <Form2>
                <InputContainer>
<Label>
<Input type='checkbox' name="industry" value="Healthcare"/>
Healthcare
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Healthcare"/>
    Retail & Wholesale
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Manufacturing"/>
    Manufacturing
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Finanacial"/>
    Finanacial
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Transportation & Logistics"/>
    Transportation & Logistics
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Telecommunications"/>
    Telecommunications
    </Label>
</InputContainer>

                </Form2>

                
            </Form1>
            <Form1>
            <Form3>
                <InputContainer>
<Label>
<Input type='checkbox' name="industry" value="Healthcare"/>
Public sector
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Healthcare"/>
    Entertainment
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Manufacturing"/>
    Education
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Finanacial"/>
    Professional services
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='checkbox' name="industry" value="Transportation & Logistics"/>
    Construction
    </Label>
</InputContainer>
<InputContainer>
    <Input type='checkbox' name="industry" value="Telecommunications"/>
    <Input1 type="text" placeholder="others (please specify)"/>
</InputContainer>

                </Form3>
            </Form1>
        </Main>
    )


}
export default SecondForm

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
gap:-10px;
border-radius:10px;
padding:20px;
width:700px;
height:350px;
`
const Form3 = Styled.div`
margin-top:40px;
`
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font:family:Roboto;
`
const Form2 = Styled.form`
`
const Input = Styled.input`
margin-right:10px;
`
const InputContainer=Styled.div`
margin-top:20px;
`
const Label = Styled.label`
font-size:16px;
font-family: Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
`