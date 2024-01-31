import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  word-wrap: break-word;

  z-index: 5;

  background-color: rgba(0, 0, 0, 0.8);
`;
