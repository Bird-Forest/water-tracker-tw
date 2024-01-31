import styled from 'styled-components';

export const LogoutModal = styled.div`
  .title {
    color: var(--primaryDark);
    font-size: 18px;
    font-weight: 500;
    line-height: 1.11;
  }
  .logoutbtn {
    display: block;
    border-radius: 10px;
    cursor: pointer;

    background: var(--secondaryRed);
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    border: transparent;
  }
  .cancelbtn {
    display: block;
    border-radius: 10px;
    cursor: pointer;

    background: var(--secondaryBlue);
    border: transparent;
    padding: 8px 30px;
  }
`;
