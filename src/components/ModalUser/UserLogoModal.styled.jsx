import styled from 'styled-components';

export const Div = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  width: 118px;
  height: 88px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;

  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;

export const Button = styled.button`
  &:hover,
  &:focus {
    color: #ff9d43;
  }
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;

  color: #407bff;
  background-color: transparent;
  border: transparent;
  font-size: 16px;
  line-height: 1.25;
`;
