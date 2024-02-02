import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 7vh;
  margin: 0;
  padding: 8px 20px 0 20px;
  @media screen and (min-width: 768px) {
    padding: 8px 32px 0 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 8px 112px 0 112px;
  }
`;
// export const HeaderContainer = styled.header`
//   padding: 8px 0 24px 0;
//   @media screen and (min-width: 768px) {
//     padding: 16px 0 40px 0;
//   }
//   @media screen and (min-width: 1440px) {
//     padding: 12px 0 22px 0;
//   }
// `;
