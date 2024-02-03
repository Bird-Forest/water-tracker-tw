import { useAuth } from 'hooks/useAuth';
import { UploadWrapper, Title, Upload, Avatar } from './Upload.styled';

const UploadImage = () => {
  const { user } = useAuth();

  const handleChange = event => {
    const formData = new FormData();
    if (event.target.files.length <= 0) {
      return;
    }
    formData.append('avatar', event.target.files[0]);
  };

  return (
    <>
      <Title>Your photo</Title>
      <UploadWrapper>
        <Avatar id="avatar" src={user.avatarURL} />
        <Upload>
          <input
            name="photo"
            type="file"
            onChange={handleChange}
            id="upload"
            accept="image/*"
            style={{ display: 'none' }}
          />
          <p>Upload a photo</p>
        </Upload>
      </UploadWrapper>
    </>
  );
};

export default UploadImage;
