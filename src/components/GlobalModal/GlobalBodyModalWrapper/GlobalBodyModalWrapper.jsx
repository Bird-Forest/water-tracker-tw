import { StyledSection } from './GlobalBodyModalWrapper.styled';
import { RxCross1 } from 'react-icons/rx';

export const GlobalBodyModalWrapper = ({ children, title }) => {
  return (
    <StyledSection>
      {/* {title} */}
      {children}
      <button className="btn-modal-cross-cancel">
        <RxCross1 className="_cross-btn-close-modal-window_" />
      </button>
    </StyledSection>
  );
};
