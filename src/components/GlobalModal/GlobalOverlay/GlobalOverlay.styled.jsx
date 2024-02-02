import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  padding: 40px 32px;

  display: flex;
  justify-content: center;
  align-items: ${({ $position }) => ($position ? $position : 'strech')};

  min-width: 100vw;
  max-height: 100vh;
  min-height: 100%;

  overflow-y: auto;

  z-index: 5;

  background-color: rgba(0, 0, 0, 0.8);
`;
