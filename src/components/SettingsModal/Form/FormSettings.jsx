import { useAuth } from '../../../hooks/useAuth';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useState } from 'react';

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

export const FormSettings = () => {
  const { user } = useAuth();
  const [name = user.name, setName] = useState();
  const [gender = user.gender, setGender] = useState();
  const [email = user.email, setEmail] = useState();
  let [password, setPassword] = useState('');
  const [newPassword = '', setNewPassword] = useState('');
  const [repeatPassword = '', setRepeatPassword] = useState();

  let isSubmit = true;

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);

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
    const errors = {};

    e.preventDefault();

    if (password && !newPassword) {
      return errors;
    }
    if (!password && newPassword) {
      return errors;
    }
    if (newPassword !== repeatPassword) {
      return errors;
    }
    isSubmit = false;
    setNewPassword(newPassword);
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
                  value="female"
                  onChange={handleChange}
                  checked={gender === 'female'}
                />
                <span>Woman</span>
              </label>
            </RadioWrapper>
            <RadioWrapper>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  checked={gender === 'male'}
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
                  <FiEyeOff
                    size={16}
                    color="#407BFF"
                    style={{ transform: 'rotate(180deg)' }}
                  />
                ) : (
                  <FiEye size={16} color="#407BFF" />
                )}
              </EyeButton>
              <Input
                name="password"
                type={showPassword ? 'text' : 'password'}
                onChange={handleChangeOldPassword}
                value={password}
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </PasswordWrapper>
          </FieldWrapper>
          <FieldWrapper>
            <FormText>New Password:</FormText>
            <div>
              <PasswordWrapper>
                <EyeButton onClick={() => setShowNewPassword(!showNewPassword)}>
                  {showPassword ? (
                    <FiEyeOff
                      size={16}
                      color="#407BFF"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  ) : (
                    <FiEye size={16} color="#407BFF" />
                  )}
                </EyeButton>
                <Input
                  name="newPassword"
                  type={showNewPassword ? 'text' : 'password'}
                  onChange={handleChangeNewPassword}
                  value={newPassword}
                  id="exampleInputPassword2"
                  placeholder="Password"
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
                  {showPassword ? (
                    <FiEyeOff
                      size={16}
                      color="#407BFF"
                      style={{ transform: 'rotate(180deg)' }}
                    />
                  ) : (
                    <FiEye size={16} color="#407BFF" />
                  )}
                </EyeButton>
                <Input
                  name="repeatPassword"
                  type={showRepeatPassword ? 'text' : 'password'}
                  onChange={handleChangePassword}
                  value={repeatPassword}
                  id="exampleInputPassword3"
                  placeholder="Password"
                />
              </PasswordWrapper>
            </div>
          </FieldWrapper>
        </div>
      </FormContainer>
      <Button disabled={!isSubmit} type="submit">
        Save
      </Button>
    </Form>
  );
};

export default FormSettings;
