import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 3;
`;

export const ModalStyle = styled.div`
  position: fixed;

  box-sizing: border-box;
  min-width: 256px;
  padding: 24px 12px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  border-radius: 10px;

  z-index: 4;
`;

export const CloseContainer = styled.div`
  text-align: right;
`;

export const CloseBtn = styled.button`
  padding: 0;
  border: 0;
  margin: 0;

  width: 24px;
  height: 24px;

  background-color: transparent;

  cursor: pointer;
  :hover {
    color: white;
  }
`;
