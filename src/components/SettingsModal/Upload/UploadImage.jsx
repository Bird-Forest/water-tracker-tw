import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { updateAvatar } from '../../../redux/auth/operations';
import { UploadWrapper, Title, Upload, Avatar } from './Upload.styled';
import { HiArrowUpTray } from 'react-icons/hi2';

const UploadImage = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleChange = event => {
    const formData = new FormData();
    if (event.target.files.length <= 0) {
      return;
    }
    formData.append('avatar', event.target.files[0]);
    dispatch(updateAvatar(formData));
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
          <HiArrowUpTray
            aria-label="upload picture"
            width={16}
            height={16}
            color="#407BFF"
            className="svg"
          />
          <p>Upload a photo</p>
        </Upload>
      </UploadWrapper>
    </>
  );
};

export default UploadImage;
