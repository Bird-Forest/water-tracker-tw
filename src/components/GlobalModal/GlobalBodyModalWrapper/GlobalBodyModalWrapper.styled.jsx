import styled from 'styled-components';
import theme from 'BasicStyle/themeJSX';

export const StyledSection = styled.div`
  max-width: calc(100vw - 64px);
  height: 100%;
  width: ${({ width }) => width && `${width}px`};
  height: ${({ height }) => height && `${height}px`};

  display: flex;
  justify-content: center;
  position: relative;

  padding: 24px 12px;

  background-color: #fff;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
  }

  .btn-modal-cross-cancel {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;

    top: 24px;
    right: 12px;

    padding: 0;
    width: 24px;
    height: 24px;

    background-color: transparent;

    cursor: pointer;
    background-color: transparent;
    ._cross-btn-close-modal-window_ {
      path {
        width: 12px;
        height: 12px;
        fill: ${theme.colors.primaryAccent};
      }
    }

    @media only screen and (min-width: 768px) {
      top: 36px;
      right: 24px;
    }
  }
`;
