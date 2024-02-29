import React,{Component} from "react"
import { Stepper } from 'react-form-stepper';

import Styled from "styled-components";

import FirstPage from "./FirstPage";

class FirstSoftwarePage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep(); 
    // const isFirstNameValid = this.props.validateFirstName();
    // const isLastNameValid = this.props.validateLastName();
    // if (isFirstNameValid && isLastNameValid) {
    //   this.props.nextStep();
    // }
  }

  render() {
    return(
      <Main className='form'>
        <form>

          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={0}
            styleConfig={{
              activeBgColor: '#2B459B',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: '#2b7cff',
              completedBgColor: '#407B24',
              completedTextColor: '#fff',
              size: '1em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

          <FirstPage />
            
          

        </form>
        <Button style={{textAlign: 'center'}}>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
      
    )
  }
}
export default FirstSoftwarePage;

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`

const Main = Styled.div`
background-color:#0C111F;
`