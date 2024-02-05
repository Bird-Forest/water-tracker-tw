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
  const [currentItem, setCurrentItem] = useState(null);

  // const todayWater = useSelector(selectDailyWaterAmount);
  const dayList = useSelector(selectEntries);
  console.log(dayList);
  console.log(currentItem);

  const timeFromDate = date => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleOpenModalAddWater = () => {
    setOpenModalAddWater(true);
  };


  const handleOpenModalEditWater = (item) => {
    setCurrentItem(item);
    setOpenModalEditWater(true);
  };
  const handleModalDel = (item) => {
    setCurrentItem(item);
    setOpenModalDel(true);
};


  const portionsAll = dayList.map((item) => (
    <ListItem key={item._id}>
      <InfoWrap>
        <IconWrapper>
          {' '}
          <Icon />{' '}
        </IconWrapper>
        <TextVolume>{item.amountWater} ml</TextVolume>
        <TextTime>{timeFromDate(item.time)}</TextTime>
      </InfoWrap>

      <WrapBtn>
      <EditBtn onClick={() => handleOpenModalEditWater(item)}>
          <FaRegEdit />
        </EditBtn>
        <DeleteBtn onClick={() => handleModalDel(item)}>
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
            item = {currentItem}
          />
        </GlobalModal>
      )}
      {openModalDel && (
        <GlobalModal
          $position={'center'}
          openModal={openModalDel}
          setOpenModal={setOpenModalDel}
        >
          <WaterDelModal closeModal={setOpenModalDel} 
          title={'Delete entry'}
           id = {currentItem._id}/>
        </GlobalModal>
      )}
    </TodayStyledDiv>
  );
};

export default TodayWaterList;
