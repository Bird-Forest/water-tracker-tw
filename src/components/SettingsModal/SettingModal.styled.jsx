import styled from 'styled-components';

export const StyledSettingModal = styled.div`
  width: 100vw;
  max-width: calc(280px - 24px);

  @media only screen and (min-width: 768px) {
    max-width: calc(592px - 48px);
  }
  @media only screen and (min-width: 1440px) {
    max-width: calc(1008px - 48px);
  }
`;
