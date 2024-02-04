import React from 'react';
import UploadImage from './Upload/UploadImage';
import FormSettings from './Form/FormSettings';
import { StyledSettingModal } from './SettingModal.styled';

const SettingModal = () => {
  return (
    <StyledSettingModal>
      <h1>Settings</h1>
      <UploadImage />
      <FormSettings />
    </StyledSettingModal>
  );
};

export default SettingModal;
