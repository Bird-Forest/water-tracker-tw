import React from 'react';
import UploadImage from './Upload/UploadImage';
import FormSettings from './Form/FormSettings';

const SettingModal = () => {
  return (
    <div>
      <h1>Settings</h1>
      <UploadImage />
      <FormSettings />
    </div>
  );
};

export default SettingModal;
