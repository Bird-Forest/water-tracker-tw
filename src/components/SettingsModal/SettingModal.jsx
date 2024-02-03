import React from 'react';
import UploadImage from './Upload/UploadImage';
import FormSettings from './Form/FormSettings';

const SettingModal = () => {
  return (
    <div>
      Settings
      <UploadImage />
      <FormSettings />
    </div>
  );
};

export default SettingModal;
