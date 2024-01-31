import styled from 'styled-components';

 const StyledPopup = styled.div`
  position: absolute;
  right: ${props => props.right}px;
  left: ${props => props.left}px;
  bottom: ${props => props.bottom}px;
  top: ${props => props.top}px;
`;


export default StyledPopup;