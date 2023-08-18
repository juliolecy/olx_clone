import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
      }
`

export const Container = styled.div`
display: flex;
align-items:center;
justify-content: center;
text-decoration: none;
flex-direction: column;
.line{
    height: 1px;
    background:linear-gradient(to right, transparent, #5d5d5d73, #38161600);
    border-radius: 50%;
    width: 100%;
    margin: 1rem 0;
}
a{
    text-decoration:none;
    cursor:pointer;
h1{
font-family: 'Noto Serif Display', serif;
font-weight:400;
font-size: 1.5rem;
color: #000;
letter-spacing: -2px;
text-transform: uppercase;
text-decoration: none;
z-index: 9;
transition: 1s all ease;
background: linear-gradient(90deg, #000, #fff, #000);
background-repeat: no-repeat;
background-size: 80%;
-webkit-background-clip: text;
-webkit-text-fill-color: rgba(255,255,255,0);
animation: ${animate} 6s linear infinite;
margin:0 0 1rem 0;
width: 60px;
}
}
`;