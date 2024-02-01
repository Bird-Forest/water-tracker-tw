import { Div, Button } from './UserLogoModal.styled';

const UserLogoModal = ({ openUserInfoModal, openUserLogoutModal }) => {
  return (
    <>
      <Div>
        <Button onClick={openUserInfoModal}>Settings</Button>
        <Button onClick={openUserLogoutModal}>Logout</Button>
      </Div>
    </>
  );
};

export default UserLogoModal;
