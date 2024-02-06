import SignBgWrapper from '../components/SignBgWrapper/SignBgWrapper';
import SigninForm from 'components/SigninForm/SigninForm';
import { WrapRender } from './Pages.styled';

const SigninPage = () => {
  return (
    <WrapRender>
      <SignBgWrapper>
        <SigninForm />
      </SignBgWrapper>
    </WrapRender>
  );
};

export default SigninPage;
