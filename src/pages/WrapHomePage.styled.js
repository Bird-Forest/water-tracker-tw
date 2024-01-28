import styled from 'styled-components';

export const StyledHomePage = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 40px;

  padding: 0 20px;
  margin: 0 auto;

  width: 320px;

  @media only screen and (min-width: 768px) {
    width: 746px;
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    row-gap: 0;
    column-gap: 32px;
    width: 1256px;
  }
`;
