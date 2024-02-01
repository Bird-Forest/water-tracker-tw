import { StyledSection } from './GlobalBodyModalWrapper.styled';
import { RxCross1 } from 'react-icons/rx';

export const GlobalBodyModalWrapper = ({ width, height, children }) => {
  return (
    <StyledSection width={width} height={height}>
      {children}
      <button className="btn-modal">
        <RxCross1 className='btn-cross' />
      </button>
    </StyledSection>
  );
};
