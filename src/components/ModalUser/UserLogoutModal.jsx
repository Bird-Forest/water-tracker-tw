import { LogoutModal } from 'components/ModalUser/UserLogoutModal.styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Link } from 'react-router-dom';

const UserLogoutModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    onClose(false);
  };

  const handleClose = () => {
    onClose(false);
  };
  return (
    <LogoutModal>
      <h1 className="title_logout">Log out</h1>
      <div>
        <h4 className="title">Do you really want to leave?</h4>
        <div className="buttons">
          <button type="button" onClick={handleLogout} className="logoutBtn">
          <Link to="/">Log out</Link> 
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
