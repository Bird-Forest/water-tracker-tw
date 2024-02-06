import SignBgWrapper from '../components/SignBgWrapper/SignBgWrapper';
import SignupForm from 'components/SignupForm/SignupForm';
import { WrapRender } from './Pages.styled';

const SignupPage = () => {
  return (
    <WrapRender>
      <SignBgWrapper>
        <SignupForm />
      </SignBgWrapper>
    </WrapRender>
    
  );
};

export default SignupPage;
