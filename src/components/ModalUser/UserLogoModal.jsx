import { useState } from 'react';
import { Div, Button } from './UserLogoModal.styled';
import SettingModal from '../SettingsModal/SettingModal';
import UserLogoutModal from './UserLogoutModal';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';

const UserLogoModal = ({ closeModal }) => {
  const [isOpenUserInfoModal, setOpenUserInfoModal] = useState(false);
  const [isOpenUserLogoutModal, setOpenUserLogoutModal] = useState(false);

  const openUserInfoModal = () => {
    setOpenUserInfoModal(true);
  };

  if (isOpenUserInfoModal || isOpenUserLogoutModal) {
    window.removeEventListener('click', closeModal);
  } else {
    window.addEventListener('click', closeModal);
  }

  const openUserLogoutModal = () => {
    setOpenUserLogoutModal(true);
  };

  const closeUserInfoModal = () => {
    setOpenUserInfoModal(false);
  };

  const closeUserLogoutModal = () => {
    setOpenUserLogoutModal(false);
  };

  return (
    <>
      <Div>
        <Button onClick={openUserInfoModal}>Settings</Button>
        <Button onClick={openUserLogoutModal}>Logout</Button>
      </Div>
      {isOpenUserInfoModal && (
        <GlobalModal
          $position={'center'}
          openModal={isOpenUserInfoModal}
          setOpenModal={setOpenUserInfoModal}
          width={1008}
        >
          <SettingModal title={'Title'} />
        </GlobalModal>
      )}
      {isOpenUserLogoutModal && (
        <GlobalModal
          $position={'center'}
          openModal={isOpenUserLogoutModal}
          setOpenModal={setOpenUserLogoutModal}
          width={524}
        >
          <UserLogoutModal onClose={setOpenUserLogoutModal} title={'Log out'} />
        </GlobalModal>
      )}

      {/* Модальне вікно для settings */}
      {isOpenUserInfoModal ?? <SettingModal onClose={closeUserInfoModal} />}

      {/* Модальне вікно для logout */}
      {isOpenUserLogoutModal ?? (
        <UserLogoutModal onClose={closeUserLogoutModal} />
      )}
    </>
  );
};

export default UserLogoModal;
