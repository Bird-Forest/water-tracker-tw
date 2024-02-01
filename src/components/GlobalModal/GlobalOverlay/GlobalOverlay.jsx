import { StyledOverlay } from './GlobalOverlay.styled';

export const GlobalOverlay = ({$position, closeModal, children }) => {
  return <StyledOverlay $position={$position} onClick={closeModal}>{children}</StyledOverlay>;
};
