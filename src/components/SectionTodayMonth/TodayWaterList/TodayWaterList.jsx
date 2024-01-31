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

const TodayWaterList = () => {
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
            <AddBtnStyle>
              <FaPlus />
              Add water
            </AddBtnStyle>
          </StyledLi>
        </UlStyle>
      </ListAddDiv>
    </TodayStyledDiv>
  );
};

export default TodayWaterList;
