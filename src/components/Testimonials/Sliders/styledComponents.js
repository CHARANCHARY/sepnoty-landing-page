import styled from "styled-components";

export const MainContainers = styled.div`
background-color:white;
display: flex;
flex-direction: column;
gap: 10px;
height: 250px;
width: 400px;
background-color: white;
	position: relative;
	padding: 20px;
	color: white;
	border-radius: 30px;

&::after {
	content: "";
	position: absolute;
	height: 25px;
	width: 35px;
	bottom: -25px;
	left: 10%;
	background-color: #003BDE;
	clip-path: polygon(20% 0%, 100% 0, 30% 100%);  
    border-radius: 0 0 20px 40px;

}
`


export const Name = styled.p`
color:black;
font-size: 22px;
`

export const Role = styled.a`
color:black;
font-size: 10px;
`
export const Discription = styled.p`
color:#878787;
font-size: 12px;

`
export const Button = styled.button`
border: 0;
background-color: white;
color: black;
display: flex;
flex-direction: column;
justify-content: end;
align-items: end;
text-decoration: underline;
`
