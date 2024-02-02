import styled, { keyframes } from 'styled-components';

const waveAnimation = keyframes`
  0% {background-position: 200px 10px;}
  50% {background-position: 100px -20px;}
  100% {background-position: 0px -40px;}
`;

export const StyledLoader = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  width: 210px; 
  height: 100px;
  border-radius: 20px;
  border: 5px solid #407BFF;
  background-image: linear-gradient(45deg, 0%, 100%);
  opacity: 0.95;
  box-shadow: 0px 2px 0px #ffe8da;
  
  .tile01 {
    margin: auto;
    width: 200px; 
    height: 100px; 
  }

  .mask {
    position: relative;
    top: 5px;
    margin: auto;
    width: 200px; 
    height: 100px; 
    font-size: 60px;
    font-weight: 700;
    font-family: 'Lobster Two', cursive;
    text-align: center;
    line-height: 90px;
    text-shadow: 0px 2px 2px rgba(0,0,0,0.1), 0px 2px 0px rgba(255,255,255,0.3);
    background-image: radial-gradient(circle at center 10px, #111111 50%, #407BFF 51%);
    background-size: 40px 110px;  
    background-clip: text; 
    color: transparent; 
    animation-name: ${waveAnimation}; 
    animation-duration: 3s;  
    animation-iteration-count: infinite; 
    animation-timing-function: linear; 
  }
`;
