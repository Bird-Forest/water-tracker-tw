import { StyledOverlay } from './GlobalOverlay.styled';

export const GlobalOverlay = ({ closeModal, children }) => {
  return <StyledOverlay onClick={closeModal}>{children}</StyledOverlay>;
};
