import styled from 'styled-components';

export const NavigateWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  .navigate {
    font-family: 'Prompt', sans-serif;
    display: block;
    font-size: 12px;
    font-weight: 700;
    color: red;
    text-decoration: none;
    transition: all 0.3s;
    &.active {
      color: black;
    }
  }
`;
