import styled from 'styled-components';

export const LogoutModal = styled.div`
  width: 100vw;
  max-width: calc(280px - 24px);

  @media only screen and (max-width: 767px) {
    padding: 12px 12px;
  }

  @media only screen and (min-width: 768px) {
    max-width: calc(592px - 48px);
  }
  .title {
    color: #2f2f2f;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    margin-bottom: 24px;
  }
  .title_logout {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.23;
    margin-bottom: 24px;
  }
  .logoutBtn {
    display: block;
    border-radius: 10px;
    cursor: pointer;

    background: #ef5050;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    border: transparent;
    padding: 8px 30px;

    width: 100%;
    height: 36px;

    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
  }

  .logoutBtn:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }

  .logoutBtn:active {
    box-shadow: none;
  }

  .cancelBtn {
    display: block;
    border-radius: 10px;
    cursor: pointer;

    background: #9ebbff;
    border: transparent;
    padding: 8px 30px;

    width: 100%;
    height: 36px;

    color: #407bff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
  }

  .cancelBtn:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
  }
  .cancelBtn:active {
    box-shadow: none;
  }

  @media only screen and (min-width: 768px) {
    .logoutBtn {
      font-size: 18px;

      display: inline;
      width: 160px;
      height: 44px;
      order: 2;
    }

    .cancelBtn {
      font-size: 18px;

      display: inline;
      width: 160px;
      height: 44px;
      order: 1;
    }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media only screen and (min-width: 768px) {
    .buttons {
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  @media only screen and (min-width: 1440px) {
    .buttons {
      justify-content: flex-start;
    }
  }
`;
