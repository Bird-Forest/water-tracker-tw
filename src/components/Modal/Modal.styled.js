import styled from 'styled-components';

export const Overlay = styled.section`
  display: block;
  /* position: absolute; */
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  /* z-index: 3; */
`;

export const ModalStyle = styled.div`
  /* position: fixed; */
  /* my style */
  position: relative;
  display: flex;
  width: 360px;
  height: 600px;
  padding: 16px;

  box-sizing: border-box;
  min-width: 256px;
  padding: 24px 12px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;

  border-radius: 10px;

  /* z-index: 4; */
`;

// Не потрібен
export const CloseContainer = styled.div`
  text-align: right;
`;
//  Мій елемент
export const BtnClose = styled.button`
  display: block;
  top: 16px;
  right: 16px;
  position: absolute;
  width: 20px;
  height: 20px;
  .btn-close {
    width: 16px;
    height: 16px;
    fill: red;
  }
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
