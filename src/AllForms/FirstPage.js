import Styled from "styled-components"
const FirstStep = () => {
    
    return (
        <Main>
            <FormContainer>
                <Form>
                    <Heading>
                    *Choose the type of website/App you need:
                    </Heading>
                    <CheckBoxCon>
                        <input type="checkbox" id="1st"/>
                        <Label htmlfor="1st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="2st"/>
                        <Label htmlfor="2st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="3st"/>
                        <Label htmlfor="3st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="4st"/>
                        <Label htmlfor="4st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="5st"/>
                        <Label htmlfor="5st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="6st"/>
                        <Label htmlfor="6st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                </Form>
            </FormContainer>
            <FormContainer>
                <Form>
                    <Heading>
                    *Choose the type of website/App you need:
                    </Heading>
                    <CheckBoxCon>
                        <input type="radio" name="first-page" id="1st"/>
                        <Label htmlfor="1st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon> 
                        <input type="radio" name="first-page" id="2st"/>
                        <Label htmlfor="2st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="radio" name="first-page" id="3st"/>
                        <Label htmlfor="3st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="radio" name="first-page" id="4st"/>
                        <Label htmlfor="4st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="radio" name="first-page" id="5st"/>
                        <Label htmlfor="5st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="radio" name="first-page" id="6st"/>
                        <Label htmlfor="6st">
                        Corporate Website/App
                        </Label>
                    </CheckBoxCon>
                </Form>
                
            </FormContainer>
        </Main>
    )
}
export default FirstStep;

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
padding:10px;
height:300px;
width:300px;
border: 1px solid #C1CAE7;
background: #C1CAE7;
gap:20px;
`
const CheckBoxCon = Styled.div`
margin-top:13px;
align-items:start;
justify-content:space-between;
`
const Label = Styled.label`
font-size:15px;
`
const Form = Styled.form`

`