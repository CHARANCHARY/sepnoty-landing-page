import Styled from "styled-components";

const SevenPage = () => {
    return(
        <Main>
            <FormContainer>
                <Form>
                    <Heading>
                    *Are there any compliance requirements?
                    </Heading>
                    <CheckBoxCon>
                        <input type="checkbox" id="one"/>
                        <Label htmlfor="one">
                        No
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="two"/>
                        <Label htmlfor="two">
                        HIPPA
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="three"/>
                        <Label htmlfor="three">
                        PCI DSS
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="four"/>
                        <Label htmlfor="four">
                        GDPR
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="five"/>
                        <Label htmlfor="five">
                        I need your consultation on compliance
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="five"/>
                        <Label htmlfor="five">
                        Others (Please Specify)
                        </Label>
                    </CheckBoxCon> 
                </Form>
            </FormContainer>
            <Form1>
            <Heading>
            *Do you need integration with any external or internal systems?
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
<Heading>
            *Do you need integration with any external or internal systems?
                    </Heading>

                </Form2>
                <Input3 type="text" placeholder="Yes (Please Specify)"/>
                
            </Form1>
        </Main>

    )
}
export default SevenPage;

const Main = Styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-item:center;
gap:20px;
`
const Heading = Styled.h1`
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 30px;
letter-spacing: 0em;
text-align: left;
color: #263238;
`

const FormContainer = Styled.div`
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
const CheckBoxCon = Styled.div`
gap:30px;
align-items:start;
justify-content:space-between;
margin-top:13px;
`
const Label = Styled.label`
font-size:18px;
font-family: Inter;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;
`
const Form = Styled.form`

`
// const Para1 = Styled.p`

// `
const InputContainer=Styled.div`
margin-top:20px;
`
const Input1 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
`
const Input = Styled.input`

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
const Form2 = Styled.form`

`
const Input3 = Styled.input`
background: #C1CAE7;
border: 1px solid #8C8C8C;
width:250px;
border-radius:4px;
`


