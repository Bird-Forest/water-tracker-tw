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
  StyledQuestion,
} from '../TodayWaterList/TodayWaterList.styled';
import { useState } from 'react';
import { GlobalModal } from 'components/GlobalModal/GlobalModal';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';
import { WaterDelModal } from 'components/WaterDelModal/WaterDelModal';

const TodayWaterList = () => {
  const [openModalAddWater, setOpenModalAddWater] = useState(false);
  const [openModalEditWater, setOpenModalEditWater] = useState(false);
  const [openModalDel, setOpenModalDel] = useState(false);

  const handleOpenModalAddWater = () => {
    setOpenModalAddWater(true);
  };
  const handleOpenModalEditWater = () => {
    setOpenModalEditWater(true);
  };
  const handleModalDel = () => {
    setOpenModalDel(true);
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
        <EditBtn onClick={handleOpenModalEditWater}>
          <FaRegEdit />
        </EditBtn>
        <DeleteBtn onClick={handleModalDel}>
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
     {portionsAll?.length > 0 ? portionsAll : <li>
             <StyledQuestion>Did you drink water today?</StyledQuestion>
            </li>}

          <StyledLi>
            <AddBtnStyle onClick={handleOpenModalAddWater}>
              <FaPlus />
              Add water
            </AddBtnStyle>
          </StyledLi>
        </UlStyle>
      </ListAddDiv>

      {openModalAddWater && (
        <GlobalModal
          $position={'center'}
          openModal={openModalAddWater}
          setOpenModal={setOpenModalAddWater}
        >
          <AddWaterModal
            closeModal={setOpenModalDel}
            isEditing={false}
            title={'add water'}
          />
        </GlobalModal>
      )}
      {openModalEditWater && (
        <GlobalModal
          $position={'center'}
          openModal={openModalEditWater}
          setOpenModal={setOpenModalEditWater}
        >
          <AddWaterModal
            closeModal={setOpenModalDel}
            isEditing={true}
            title={'Edit the entered amount of water'}
          />
        </GlobalModal>
      )}
      {openModalDel && (
        <GlobalModal
          $position={'center'}
          openModal={openModalDel}
          setOpenModal={setOpenModalDel}
        >
          <WaterDelModal closeModal={setOpenModalDel} title={'Delete entry'} />
        </GlobalModal>
      )}
    </TodayStyledDiv>
  );
};

export default TodayWaterList;