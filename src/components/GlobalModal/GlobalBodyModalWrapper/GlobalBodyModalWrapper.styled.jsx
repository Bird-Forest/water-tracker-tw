import styled from 'styled-components';
import theme from 'BasicStyle/themeJSX';

export const StyledSection = styled.div`
  max-width: 100%;

  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};

  display: flex;
  justify-content: center;
  position: relative;

  max-height: calc(100vh - 40px);
  overflow-y: auto;

  padding: 24px 12px;

  background-color: #fff;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
  }

  .btn-modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    top: 2.8%;
    right: 4.2%;

    padding: 0;
    width: 24px;
    height: 24px;

    background-color: transparent;

    cursor: pointer;
    background-color: transparent;
    .btn-cross {
      path {
        width: 12px;
        height: 12px;
        fill: ${theme.colors.primaryAccent};
      }
    }
  }
`;
