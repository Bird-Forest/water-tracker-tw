import styled from 'styled-components';

export const SignBgWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 20px;
  min-height: calc(100vh - 56px);
  position: relative;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  picture {
    position: absolute;
    z-index: -1;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
  }

  @media screen and (min-width: 320px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 32px;
    max-width: 768px;
    padding: 0 32px;

    picture {
      position: absolute;
      bottom: unset;
      width: 736px;
    }
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(12, 1fr);
    max-width: 1440px;
    padding: 0 112px;
    align-items: center;

    picture {
      width: 916px;
      left: -40px;
      bottom: 40px;
      transform: translateX(0);
    }
  }
`;
