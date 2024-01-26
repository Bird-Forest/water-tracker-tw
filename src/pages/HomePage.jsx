import React, { useState } from 'react';

// export default function HomePage() {
//   return <div>HomePage</div>;
// }

import DailyNormalModal from 'components/DailyNormalModal/DailyNormalModal.jsx';
import {
  MyDailyNormaDiv,
  MyDailyNorma,
  Volume,
  Edit,
  Box,
} from './HomePage.styled.js';

export const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => setShowModal(!showModal);
  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal);
  };

  return (
    <>
      <div>HomePage</div>

      <MyDailyNormaDiv>
        <MyDailyNorma>My daily norma</MyDailyNorma>
        <Box>
          <Volume>1.5 L</Volume>

          <Edit onClick={toggleModal}>Edit</Edit>
        </Box>
      </MyDailyNormaDiv>

      {showModal && <DailyNormalModal closeModal={toggleModal} />}
    </>
  );
};
