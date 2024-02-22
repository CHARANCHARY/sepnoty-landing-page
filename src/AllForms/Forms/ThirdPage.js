import Styled from "styled-components"

const ThirdPage = () => {

    return(
        <Main>
            <Form1>
                <Heading>
                *What service(s) do you need?
                </Heading>
                <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="industry" value="Healthcare"/>
Website development
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    Technical Consulting
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Manufacturing"/>
    UX design / Redesign
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Finanacial"/>
    UI design / Redesign
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Transportation & Logistics"/>
    CMS development
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Telecommunications"/>
    Technical SEO
    </Label>
</InputContainer>

                </Form2>

            </Form1>
            <Form1>
            <Form2>
                <InputContainer>
<Label>
<Input type='radio' name="industry" value="Healthcare"/>
Migration to a new CMS
</Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    Delivery of new features
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Manufacturing"/>
    Troubleshooting
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Finanacial"/>
    <Input1>others (please specify)</Input1>
    </Label>
</InputContainer>
<InputContainer>
<Label>
Please provide a link to your existing website if you have one</Label>
<Input2 type="text"/></InputContainer>

                </Form2>
            </Form1>
        </Main>
    )
}
export default ThirdPage;

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
const Input1 = Styled.textarea`
background:transparent;
border: 1px solid #C1CAE7;
font-size:15px;
color: #263238;
font-weight:500;
`
const Input2 = Styled.input`
background: #C1CAE7;
border: 1px solid gray;
`