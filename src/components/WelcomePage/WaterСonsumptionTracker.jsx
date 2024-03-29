import React from 'react';
import { IoCalendarOutline } from 'react-icons/io5';
import { HiOutlinePresentationChartBar } from 'react-icons/hi2';
import { HiOutlineWrenchScrewdriver } from 'react-icons/hi2';
import {
  BtnTryTracker,
  SubtitleMain,
  TitleMain,
  TitleWrap,
  WrapBenefits,
  WrapContLeft,
  WrapItem,
  WrapLeft,
} from './Welcome.styled';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks';

export default function WaterСonsumptionTracker() {
  const { isLoggedIn } = useAuth();
  return (
    <WrapLeft>
      <TitleMain>Water consumption tracker</TitleMain>
      <SubtitleMain>Record daily water intake and track</SubtitleMain>
      <WrapContLeft>
        <TitleWrap>Tracker Benefits</TitleWrap>
        <WrapBenefits>
          <WrapItem>
            <IoCalendarOutline className="icon-item" />
            <p className="text">Habit drive</p>
          </WrapItem>
          <WrapItem>
            <HiOutlinePresentationChartBar className="icon-item" />
            <p className="text">View statistics</p>
          </WrapItem>
          <WrapItem>
            <HiOutlineWrenchScrewdriver className="icon-item" />
            <p className="text">Personal rate setting</p>
          </WrapItem>
        </WrapBenefits>
      </WrapContLeft>
      {isLoggedIn ? (
        <Link to="/home">
          <BtnTryTracker>To home page</BtnTryTracker>
        </Link>
      ) : (
        <Link to="/signup">
          <BtnTryTracker>Try tracker</BtnTryTracker>
        </Link>
      )}
    </WrapLeft>
  );
}
