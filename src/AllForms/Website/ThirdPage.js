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
            <Form3>
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
    <Input1 type="text" placeholder="others (please specify)"/>
    </Label>
</InputContainer>
<InputContainer>
<P>
Please provide a link to your existing website if you have one</P>
<Input2 type="text" placeholder="Please add here"/></InputContainer>

                </Form3>
            </Form1>
        </Main>
    )
}
export default ThirdPage;
const P = Styled.p`
color:#000000;
font-size:15px;
margin-bottom:10px;
`

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
width:700px;
`
const Heading = Styled.h1`
color:#263238;
font-size:18px;
font-weight:700;
margin-bottom:20px;
font-family:Roboto;
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
font-family:Roboto;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
margin-left:10px;
`
const Input2 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
`
const Form3 = Styled.div`
margin-top:50px;
`