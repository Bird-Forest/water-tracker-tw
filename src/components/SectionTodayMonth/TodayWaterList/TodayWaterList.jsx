import { CiTrash } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

import portions from './portions';
import { ReactComponent as Icon } from '../../../img/glass.svg';
import {
  AddBtnStyle,
  DeleteBtn,
  IconWrapper,
  EditBtn,
  InfoWrap,
  ListAddDiv,
  ListItem,
  StyledLi,
  TextTime,
  TextVolume,
  TodayStyle,
  TodayStyledDiv,
  UlStyle,
  WrapBtn,
} from '../TodayWaterList/TodayWaterList.styled';
import { useState } from 'react';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';

const TodayWaterList = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const portionsAll = portions.map(({ id, time, quantity }) => (
    <ListItem key={id}>
      <InfoWrap>
        <IconWrapper>
          {' '}
          <Icon />{' '}
        </IconWrapper>
        <TextVolume>{quantity} ml</TextVolume>
        <TextTime>{time}</TextTime>
      </InfoWrap>

      <WrapBtn>
        <EditBtn>
          <FaRegEdit />
        </EditBtn>
        <DeleteBtn>
          <CiTrash />
        </DeleteBtn>
      </WrapBtn>
    </ListItem>
  ));

  return (
    <TodayStyledDiv>
      <TodayStyle>Today</TodayStyle>
      <ListAddDiv>
        <UlStyle>
          {portionsAll}

          <StyledLi>
            <AddBtnStyle onClick={handleOpenModal}>
              <FaPlus />
              Add water
            </AddBtnStyle>
          </StyledLi>
        </UlStyle>
      </ListAddDiv>

      {openModal && (
        <GlobalModal
          $position={'center'}
          openModal={openModal}
          setOpenModal={setOpenModal}
        >
          <AddWaterModal />
        </GlobalModal>
      )}
    </TodayStyledDiv>
  );
};

export default TodayWaterList;
