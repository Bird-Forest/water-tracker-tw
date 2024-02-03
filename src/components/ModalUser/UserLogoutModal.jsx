import { LogoutModal } from 'components/ModalUser/UserLogoutModal.styled';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';

const UserLogoutModal = ({ onClose }) => {
  // const dispatch = useDispatch();

  const handleLogout = () => {
    // dispatch(logOut());
    onClose(false);
  };

  const handleClose = () => {
    onClose(false);
  };
  return (
    <LogoutModal>
      <div>
        <h4 className="title">Do you really want to leave?</h4>
        <div className="buttons">
          <button type="button" onClick={handleLogout} className="logoutBtn">
            Logout
          </button>
          <button type="button" onClick={handleClose} className="cancelBtn">
            Cancel
          </button>
        </div>
      </div>
    </LogoutModal>
  );
};

export default UserLogoutModal;
