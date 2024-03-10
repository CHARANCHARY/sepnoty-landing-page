import styled from "styled-components";

const Thank = () =>{
    return(
        <D1>
            <D2>
                <H1>
THANK YOU
                </H1>
            </D2>
        </D1>
    )
}
export default Thank;






const D1 = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
`
const D2 = styled.div`
justify-content:center;
height:300px;
width:300px;
background-color:blue;
margin-left:190px;
`
const H1 = styled.h1`
text-align:center;
`
