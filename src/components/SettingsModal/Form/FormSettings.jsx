import { useAuth } from '../../../hooks/useAuth';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../../redux/auth/operations';

import {
  Form,
  BlockTitle,
  LabelName,
  GenderWrapper,
  RadioWrapper,
  FieldWrapper,
  Input,
  PasswordWrapper,
  EyeButton,
  FormText,
  Button,
  FormContainer,
} from './FormSettings.styled';
import { Notify } from 'notiflix';

export const FormSettings = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user.name);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [repeatPassword = '', setRepeatPassword] = useState();

  let isSubmit = true;

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

  const dispatch = useDispatch();

  const handleChangePassword = e => {
    setRepeatPassword(e.target.value);
  };

  const handleChangeNewPassword = e => {
    setNewPassword(e.target.value);
  };

  const handleChangeOldPassword = e => {
    setPassword(e.target.value);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChange = e => {
    setGender(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (password && !newPassword) {
      Notify.failure('Please enter new password');
      return;
    }
    if (!password && newPassword) {
      Notify.failure('Please enter old password');
      return;
    }
    if (newPassword !== repeatPassword) {
      Notify.failure("Passwords don't match");
      return;
    }

    const updatedData = {};

    if (name !== user.name) {
      updatedData.name = name;
    }

    if (gender !== user.gender) {
      updatedData.gender = gender;
    }

    if (email !== user.email) {
      updatedData.email = email;
    }

    if (password !== '') {
      updatedData.password = password;
    }

    if (newPassword !== '') {
      updatedData.newPassword = newPassword;
    }

    if (Object.keys(updatedData).length === 0) {
      Notify.info('No changes made.');
      return;
    }

    isSubmit = false;
    setNewPassword(newPassword);
    dispatch(updateUser(updatedData));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormContainer>
        <div>
          <BlockTitle>Your gender identity</BlockTitle>
          <GenderWrapper>
            <RadioWrapper>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="woman"
                  onChange={handleChange}
                  checked={gender === 'woman'}
                />
                <span>Woman</span>
              </label>
            </RadioWrapper>
            <RadioWrapper>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="man"
                  onChange={handleChange}
                  checked={gender === 'man'}
                />
                <span>Man</span>
              </label>
            </RadioWrapper>
          </GenderWrapper>
          <FieldWrapper>
            <LabelName>Your name</LabelName>
            <Input
              name="name"
              type="text"
              aria-describedby="nameHelp"
              onChange={handleChangeName}
              value={name}
              placeholder="Name"
              autoComplete="username"
              required
            />
          </FieldWrapper>
          <LabelName>Email</LabelName>
          <FieldWrapper>
            <Input
              name="email"
              type="email"
              id="InputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChangeEmail}
              value={email}
              placeholder="Email"
              autoComplete="email"
              required
            />
          </FieldWrapper>
        </div>
        <div>
          <BlockTitle>Password</BlockTitle>
          <FieldWrapper>
            <FormText>Outdated password:</FormText>
            <PasswordWrapper>
              <EyeButton onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                  <FiEye
                    size={16}
                    color="#407BFF"
                    style={{ transform: 'rotate(180deg)' }}
                  />
                ) : (
                  <FiEyeOff size={16} color="#407BFF" />
                )}
              </EyeButton>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChangeOldPassword}
                value={password}
                id="exampleInputPassword1"
                placeholder="Password"
                minLength={8}
                maxLength={64}
              />
            </PasswordWrapper>
          </FieldWrapper>
          <FieldWrapper>
            <FormText>New Password:</FormText>
            <div>
              <PasswordWrapper>
                <EyeButton onClick={() => setShowNewPassword(!showNewPassword)}>
                  {showNewPassword ? (
                    <FiEye
                      size={16}
                      color="#407BFF"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  ) : (
                    <FiEyeOff size={16} color="#407BFF" />
                  )}
                </EyeButton>
                <Input
                  name="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  onChange={handleChangeNewPassword}
                  value={newPassword}
                  id="exampleInputPassword2"
                  placeholder="Password"
                  minLength={8}
                  maxLength={64}
                />
              </PasswordWrapper>
            </div>
          </FieldWrapper>
          <FieldWrapper>
            <FormText>Repeat new password:</FormText>
            <div>
              <PasswordWrapper>
                <EyeButton
                  onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                >
                  {showRepeatPassword ? (
                    <FiEye
                      size={16}
                      color="#407BFF"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  ) : (
                    <FiEyeOff size={16} color="#407BFF" />
                  )}
                </EyeButton>
                <Input
                  name="repeatPassword"
                  type={showRepeatPassword ? 'text' : 'password'}
                  onChange={handleChangePassword}
                  value={repeatPassword}
                  id="exampleInputPassword3"
                  placeholder="Password"
                  minLength={8}
                  maxLength={64}
                />
              </PasswordWrapper>
            </div>
          </FieldWrapper>
        </div>
      </FormContainer>
      <Button disabled={!isSubmit} type="submit">
        <p className="saveBtn">Save</p>
      </Button>
    </Form>
  );
};

export default FormSettings;
