import styled from 'styled-components';

export const StyledHomePage = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  padding: 24px 20px 0;
  margin: 0 auto;

  width: 320px;

  @media only screen and (min-width: 768px) {
    width: 746px;
    padding-top: 40px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 32px;
    padding-top: 20px;

    width: 1256px;
  }
`;
