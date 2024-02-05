import { CiTrash } from 'react-icons/ci';
import { FaRegEdit } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';

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
import { useSelector } from 'react-redux';

import { GlobalModal } from 'components/GlobalModal/GlobalModal';
import AddWaterModal from 'components/AddWaterModal/AddWaterModal';
import { WaterDelModal } from 'components/WaterDelModal/WaterDelModal';
// import { selectDailyWaterAmount } from '../../../redux/tracker/selectors';
import { selectEntries } from '../../../redux/tracker/selectors';

const TodayWaterList = () => {
  const [openModalAddWater, setOpenModalAddWater] = useState(false);
  const [openModalEditWater, setOpenModalEditWater] = useState(false);
  const [openModalDel, setOpenModalDel] = useState(false);

  // const todayWater = useSelector(selectDailyWaterAmount);
  const dayList = useSelector(selectEntries);
  console.log(dayList);

  const timeFromDate = date => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleOpenModalAddWater = () => {
    setOpenModalAddWater(true);
  };
  const handleOpenModalEditWater = evt => {
    // console.log(evt.currentTarget);
    setOpenModalEditWater(true);
  };
  const handleModalDel = evt => {
    // console.log(evt.currentTarget);
    setOpenModalDel(true);
  };

  const portionsAll = dayList.map(({ _id, time, amountWater }) => (
    <ListItem key={_id}>
      <InfoWrap>
        <IconWrapper>
          {' '}
          <Icon />{' '}
        </IconWrapper>
        <TextVolume>{amountWater} ml</TextVolume>
        <TextTime>{timeFromDate(time)}</TextTime>
      </InfoWrap>

      <WrapBtn>
        <EditBtn id={_id} onClick={handleOpenModalEditWater}>
          <FaRegEdit />
        </EditBtn>
        <DeleteBtn id={_id} onClick={handleModalDel}>
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
          {portionsAll?.length > 0 ? (
            portionsAll
          ) : (
            <li>
              <StyledQuestion>Did you drink water today?</StyledQuestion>
            </li>
          )}

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
