// import { useEffect, useRef } from 'react';
// import {
//   Overlay,
//   ModalStyle,
//   ModalContent,
//   CloseContainer,
//   CloseButton,
// } from './ModalWindow.styled';
// import IconCloseModal from '../../img/IconCloseModal';

// export const ModalWindow = ({ children, title, closeModal }) => {
//   useEffect(() => {
//     const handleKey = event => {
//       if (event.code === 'Escape') {
//         closeModal();
//       }
//     };

//     const handleClickOutside = event => {
//       if (!modalContainerRef.current.contains(event.target)) {
//         closeModal();
//       }
//     };

//     window.addEventListener('keydown', handleKey);
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       window.removeEventListener('keydown', handleKey);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [closeModal]);

//   const modalContainerRef = useRef(null);

//   return (
//     <Overlay>
//       <ModalStyle>
//         <ModalContent
//           onClick={e => e.stopPropagation()}
//           ref={modalContainerRef}
//         >
//           <div className="modal-header">
//             <h2>{title}</h2>
//             <CloseContainer onClick={e => closeModal(e)}>
//               <CloseButton onClick={closeModal}>
//                 <IconCloseModal size={24} />
//               </CloseButton>
//             </CloseContainer>
//           </div>

//           {children}
//         </ModalContent>
//       </ModalStyle>
//     </Overlay>
//   );
// };
