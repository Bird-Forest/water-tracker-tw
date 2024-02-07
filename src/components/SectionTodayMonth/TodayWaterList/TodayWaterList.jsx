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
// import AddWaterModal from 'components/AddWaterModal/AddWaterModal';
import { WaterDelModal } from 'components/WaterDelModal/WaterDelModal';
// import { selectDailyWaterAmount } from '../../../redux/tracker/selectors';
import { selectEntries } from '../../../redux/tracker/selectors';
import TodayListModal from 'components/AddWaterModal/TodayListModal';

const TodayWaterList = () => {
  const [openModalTodayList, setOpenModalTodayList] = useState(false);
  const [openModalDel, setOpenModalDel] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // const todayWater = useSelector(selectDailyWaterAmount);
  const dayList = useSelector(selectEntries);
  // console.log(dayList);
  // console.log(currentItem);

  const timeFromDate = date => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleOpenModalTodayListEdit = item => {
    setCurrentItem(item);
    setOpenModalTodayList(true);
    setIsEditing(true);
  };

  const handleOpenModalTodayListAdd = () => {
    setOpenModalTodayList(true);
    setIsEditing(false);
  };

  const handleModalDel = item => {
    setCurrentItem(item);
    setOpenModalDel(true);
  };

  const portionsAll = dayList.map(item => (
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
        <EditBtn onClick={() => handleOpenModalTodayListEdit(item)}>
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
        </UlStyle>
            {/* <StyledLi> */}
            <AddBtnStyle onClick={handleOpenModalTodayListAdd}>
              <FaPlus />
              Add water
            </AddBtnStyle>
          {/* </StyledLi> */}
      </ListAddDiv>
      {openModalTodayList && (
        <GlobalModal
          $position={'center'}
          openModal={openModalTodayList}
          setOpenModal={setOpenModalTodayList}
          //  title={'add water'}
        >
          <TodayListModal
            closeModal={setOpenModalTodayList}
            isEditing={isEditing}
            data={currentItem}
          />
        </GlobalModal>
      )}

      {openModalDel && (
        <GlobalModal
          $position={'center'}
          openModal={openModalDel}
          setOpenModal={setOpenModalDel}
        >
          <WaterDelModal
            closeModal={setOpenModalDel}
            title={'Delete entry'}
            id={currentItem._id}
          />
        </GlobalModal>
      )}
    </TodayStyledDiv>
  );
};

export default TodayWaterList;
