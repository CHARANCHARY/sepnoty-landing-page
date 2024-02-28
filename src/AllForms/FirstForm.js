import React, { Component } from 'react';
import { Stepper } from 'react-form-stepper';
import Styled from "styled-components"
import './App.css';
import FirstStep from "./Website/FirstPage"

class PersonalDetails extends Component {
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
    // const { 
    //   firstname, 
    //   lastname, 
    //   email, 
    //   phone, 
    //   handleChange, 
    //   validateFirstName,
    //   validateLastName,
    //   isErrorFirstName,
    //   isErrorLastName,
    //   errorMessageFirstName,
    //   errorMessageLastName
    // } = this.props;

    return (
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

          <FirstStep />
            
          

        </form>
        <Button style={{textAlign: 'center'}}>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
    )
  }
}

export default PersonalDetails;

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`

const Main = Styled.div`
background-color:#0C111F;
`