import Styled from "styled-components"
const FirstPage = () => {
    
    return (
        <Main>
            <FormContainer>
                <Form>
                    <Heading>
                    *Choose the type of Software you need:
                    </Heading>
                    <CheckBoxCon>
                        <input type="checkbox" id="1st"/>
                        <Label htmlfor="1st">
                        System software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="2st"/>
                        <Label htmlfor="2st">
                        Application software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="3st"/>
                        <Label htmlfor="3st">
                        Designing software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="4st"/>
                        <Label htmlfor="4st">
                        Programming software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="5st"/>
                        <Label htmlfor="5st">
                        Utility software
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="6st"/>
                        <Input1 type="text" placeholder="others (please specify"/>
                    </CheckBoxCon>
                </Form>
            </FormContainer>
            <FormContainer>
                <Form>
                    <Heading>
                    *How many Tools will your Software have?
                    </Heading>
                    <InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    I am not sure
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    up to 50
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    50-100
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    100-500
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    500-1,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    1,000-5,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    5,000-10,000
    </Label>
</InputContainer>
<InputContainer>
<Label>
    <Input type='radio' name="industry" value="Healthcare"/>
    more than 10,000
    </Label>
</InputContainer>
                </Form>
            </FormContainer>
        </Main>
    )
}
export default FirstPage;

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
padding:20px;
height:300px;
width:400px;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:20px;
border-radius:10px;
`
const CheckBoxCon = Styled.div`
margin-top:13px;
align-items:start;
justify-content:space-between;
`
const Label = Styled.label`
font-size:15px;
font-family: Inter;
font-weight: 500;
color:#263238;
letter-spacing: 0em;
text-align: left;

`
const Form = Styled.form`

`
const Input1 = Styled.input`
background:transparent;
border: 1px solid gray;
font-size:15px;
color: #263238;
font-weight:500;
height:15px;
`
const Buttonel = Styled.button`
  font-size: 20px;
  background-color: #d9d9d9;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0px;
  width:60px;
  height:30px;
  margin-left: -10px;
  border-right: 1px solid #9e9898;
`;



const Para1 = Styled.p`

`
const InputContainer=Styled.div`
margin-top:5px;
`
// const Input1 = Styled.textarea`
// background:transparent;
// border: 1px solid #C1CAE7;
// font-size:15px;
// color: #263238;
// font-weight:500;
// height:15px;
// `
const Input = Styled.input`

`