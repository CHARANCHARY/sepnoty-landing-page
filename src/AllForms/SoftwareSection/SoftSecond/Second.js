import React,{Component} from "react";
import Styled from "styled-components"
import { Stepper } from 'react-form-stepper';

import SecondPage from "./SecondPage";


class SecondSoftware extends Component{
    shouldComponentUpdate(nextProps) {
        if (this.props.addCourse !== nextProps.addCourse || this.props.level !== nextProps.level ) {
          return true;
        } else {
          return false;
        }
      }
    
      continue = e => {
        e.preventDefault();
        this.props.nextStep();
      };
    
      back = e => {
        e.preventDefault();
        this.props.prevStep();
      };
    
    render(){
        return(<Main className='form'>
        <form>

          <Stepper
            steps={[{ label: '' }, { label: '' }, { label: '' },{ label: '' },{label:""},{label:""},{label:""},{label:""}]}
            activeStep={1}
            styleConfig={{
              activeBgColor: '#2B459B',
              activeTextColor: '#fff',
              inactiveBgColor: '#fff',
              inactiveTextColor: 'fff',
              completedBgColor: '#407B24',
              completedTextColor: '#fff',
              size: '1em'
            }}
            className={'stepper'}
            stepClassName={'stepper__step'}
          />

         <SecondPage/>

          {/* <div className='select'>
            <select
              name='select'
              onChange={addLevel}
              className='select__item'
              value={level}
            >
              <option value='null'>Choose course level</option>
              {levelOptions}
            </select>
          </div> */}

          {/* <div className='table'> */}


{/* 
            <MuiThemeProvider theme={theme}>
              <MaterialTable
                title='Choose courses'
                columns={columns}
                data={coursesOptions}
                onSelectionChange={addCourse}
                options={{
                  search: true,
                  selection: true,
                  paging: false,
                  toolbar: true,
                  showTextRowsSelected: false,
                  searchFieldStyle: {
                    position: 'absolute',
                    top: '-20px',
                    right: '-7px',
                    width: '200px',
                    backgroundColor: '#fff',
                    border: '1px solid grey',
                    padding: '3px 5px',
                    borderRadius: '3px',
                  },
                  headerStyle: {
                    display: 'none',
                  },
                }}
              />
            </MuiThemeProvider> */}

          {/* </div> */}

          

        </form>
        <Button className='buttons'>
            <button className='buttons__button buttons__button--back' onClick={this.back}>Back</button>
            <button className='buttons__button buttons__button--next' onClick={this.continue}>Next</button>
          </Button>
      </Main>
        )
    }
}
export default SecondSoftware;
const Button = Styled.div`
display:flex;
justify-content:end;
margin-top:90px;
margin-left:-90px;
`

const Main = Styled.div`
background-color:#0C111F;
`