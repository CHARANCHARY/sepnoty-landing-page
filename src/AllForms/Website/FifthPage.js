import Styled from 'styled-components';

const FifthPage = () => {
    return(
        <Main>
            <FormContainer>
                <Form>
                    <Heading>
                    *What Software features/capabilities do you need?
                    </Heading>
                    <CheckBoxCon>
                        <input type="checkbox" id="1st"/>
                        <Label htmlfor="1st">
                        Multi domain configuration
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="2st"/>
                        <Label htmlfor="2st">
                        Basic features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="3st"/>
                        <Label htmlfor="3st">
                        Drag - and - drop Page editor
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="4st"/>
                        <Label htmlfor="4st">
                        Templates
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="5st"/>
                        <Label htmlfor="5st">
                        Core features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="6st"/>
                        <Label htmlfor="6st">
                        Customizable features
                        </Label>
                    </CheckBoxCon>
                </Form>
            </FormContainer>
            <FormContainer>
                <Form1>
                    
                    <CheckBoxCon>
                        <input type="checkbox" id="7st"/>
                        <Label htmlfor="7st">
                        Collaboration features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="8st"/>
                        <Label htmlfor="8st">
                        Integration features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="9st"/>
                        <Label htmlfor="9st">
                        Security features
                        </Label>
                    </CheckBoxCon>
                    <CheckBoxCon>
                        <input type="checkbox" id="10st"/>
                        <Label htmlfor="10st">
                        Others (Please Specify)
                        </Label>
                    </CheckBoxCon>
                </Form1>
            </FormContainer>
        </Main>
    )

}

export default FifthPage;

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
const Form1 = Styled.form`
margin-top:100px;
`