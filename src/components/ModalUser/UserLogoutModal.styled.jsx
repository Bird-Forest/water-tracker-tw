import styled from 'styled-components';

export const LogoutModal = styled.div`
  .title {
    color: #2f2f2f;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
    margin-bottom: 24px;
  }
  .logoutbtn {
    display: block;
    border-radius: 10px;
    cursor: pointer;

    background: #ef5050;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    border: transparent;

    width: 232px;
    height: 36px;

    color: #ecf2ff;
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
  .cancelbtn {
    display: block;
    border-radius: 10px;
    cursor: pointer;

    background: #9ebbff;
    border: transparent;
    padding: 8px 30px;
    width: 232px;
    height: 36px;

    color: #407bff;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.25;
  }

  @media only screen and (min-width: 768px) {
    .logoutbtn {
      font-size: 18px;

      display: inline;
      width: 160px;
      height: 44px;
      order: 2;
    }

    .cancelbtn {
      font-size: 18px;

      display: inline;
      width: 160px;
      height: 44px;
      order: 1;
    }
  }

  .div-btn {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  @media only screen and (min-width: 768px) {
    .div-btn {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1440px) {
    .div-btn {
      justify-content: flex-start;
    }
  }
`;
