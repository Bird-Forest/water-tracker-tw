import styled from 'styled-components';

export const StyledDailyNorma = styled.div`
  max-width: 170px;
  padding: 8px 20px;

  border-radius: 10px;
  border: 1px solid var(--colorsSecondaryLight, #ecf2ff);
  background-color: var(--colorsPrimaryAccent, #fff);
  box-shadow: 0px 4px 8px 0px var(--colorsSecondaryBlue, #9ebbff1e);

  .daily-norma-title {
    color: var(--Primery-Color-Black, #2f2f2f);
    font-size: 18px;
    font-weight: 500;
    line-height: 133.3%;

    margin: 0 0 12px 0;
    padding: 0;
  }

  .daily-norma-body {
    display: flex;
    column-gap: 12px;
  }

  .daily-norma-text {
    color: var(--Primery-Color-Blue, #407bff);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;

    margin: 0;
  }

  .daily-norma-btn {
    padding: 0;

    color: #8baeff;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;

    background-color: inherit;
    border: none;
    cursor: pointer;
  }
`;
