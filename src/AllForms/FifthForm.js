import React, { Component } from 'react';
import Styled from "styled-components"
import { Stepper } from 'react-form-stepper';
import './App.css';
import FifthPage from './SoftwareSection/Website/FifthPage';

class SecondForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep(); 
    // const isFirstNameValid = this.props.validateFirstName();
    // const isLastNameValid = this.props.validateLastName();
    // if (isFirstNameValid && isLastNameValid) {
    //   this.props.nextStep();
    // }
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

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
            activeStep={4}
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

          <FifthPage />
            

        </form>
        <Button style={{textAlign: 'center'}}>
          <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
    )
  }
}

export default SecondForm;

const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`

const Main = Styled.div`
background-color:#0C111F;
`