import Styled from "styled-components"

const SecondForm = () => {
    return(
        <Main>
            <Form1>
                <Heading>
                *What is your industry?
                <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="industry" value="Healthcare"/>
Healthcare
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    Retail & Wholesale
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Manufacturing"/>
    Manufacturing
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Finanacial"/>
    Finanacial
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Transportation & Logistics"/>
    Transportation & Logistics
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Telecommunications"/>
    Telecommunications
    </Label>
</InputContainer>

                </Form2>

                </Heading>
            </Form1>
            <Form1>
            <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="industry" value="Healthcare"/>
Public sector
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    Entertainment
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Manufacturing"/>
    Education
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Finanacial"/>
    Professional services
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Transportation & Logistics"/>
    Construction
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Telecommunications"/>
    others (please specify)
    </Label>
</InputContainer>

                </Form2>
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
justify-content:center;
align-items:center;
border: 1px solid #C1CAE7;
background: #C1CAE7;
padding:10px;
height:300px;
width:300px;
`
const Heading = Styled.h1`
color:#263238;
font-size:20px;
font-weight:700;
margin-bottom:20px;
`
const Form2 = Styled.form`

`
const Input = Styled.input`

`
const InputContainer=Styled.div`
margin-top:20px;
`
const Label = Styled.label`
font-size:15px;
color: #263238;
font-weight:500;
`