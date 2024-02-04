import * as React from 'react';
import { useState, useEffect } from 'react';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
  Button,
  Day,
  DayCell,
  DayPercent,
  DaysContainer,
  Month,
  MonthNav,
  MonthTitle,
  Popup,
  StyledMonthStatsTable,
  StyledMonthWrapper,
} from './Calendar.styled';

const Calendar = () => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'Jule',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [hoveredDayCoords, setHoveredDayCoords] = useState({ x: 0, y: 0 });
  const daysContainerRef = React.useRef(null);

  const updateXCoord = () => {
    if (daysContainerRef.current) {
      const rect = daysContainerRef.current.getBoundingClientRect();
      setHoveredDayCoords(coords => ({
        ...coords,
        x: rect.left + rect.width / 2,
      }));
    }
  };

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    updateXCoord();
    window.addEventListener('resize', updateXCoord);
    return () => {
      window.removeEventListener('resize', updateXCoord);
    };
  }, [date]);

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;
  const monthName = date.toLocaleString('en-US', { month: 'long' });

  let waterRate = 1800;
  let percent = 85;
  let numberRecords = 7;
  const isOutlineVisible = true;

  return (
    <StyledMonthStatsTable>
      <MonthNav>
        <MonthTitle>Month</MonthTitle>
        <StyledMonthWrapper>
          <Button onClick={() => setDate(new Date(year, month - 1, day))}>
            <IoIosArrowBack className="nav" />
          </Button>
          <Month>{`${MONTHS[month]}, ${year}`}</Month>
          <Button onClick={() => setDate(new Date(year, month + 1, day))}>
            <IoIosArrowForward className="nav" />
          </Button>
        </StyledMonthWrapper>
      </MonthNav>
      <DaysContainer ref={daysContainerRef}>
        {days[month]
          ? Array(days[month])
              .fill(null)
              .map((_, index) => {
                const dayOfMonth = index + 1;
                const isToday =
                  dayOfMonth === today.getDate() &&
                  month === today.getMonth() &&
                  year === today.getFullYear();
                const isSelected = dayOfMonth === day;
                const isLeft =
                  dayOfMonth <= 5 ||
                  (dayOfMonth >= 11 && dayOfMonth <= 15) ||
                  (dayOfMonth >= 21 && dayOfMonth <= 25) ||
                  dayOfMonth === 31;
                return (
                  <DayCell key={`${dayOfMonth}-${month + 1}`}>
                    <Day
                      $isToday={isToday}
                      $isSelected={isSelected}
                      $isOutlineVisible={isOutlineVisible}
                      onMouseEnter={event => {
                        const rect = event.target.getBoundingClientRect();
                        setHoveredDayCoords({
                          x: hoveredDayCoords.x,
                          y: rect.bottom,
                        });
                      }}
                      onClick={() => {
                        setDay(dayOfMonth);
                      }}
                    >
                      {dayOfMonth}
                      <Popup
                        x={hoveredDayCoords.x}
                        y={hoveredDayCoords.y}
                        className={isLeft ? 'left' : 'right'}
                      >
                        <>
                          <h3>
                            {dayOfMonth}, {monthName}{' '}
                          </h3>
                          <p>
                            Daily norma: <span>{waterRate / 1000} L</span>
                          </p>
                          <p>
                            Fulfillment of the daily norm:{' '}
                            <span>{percent > 100 ? 100 : percent}%</span>
                          </p>
                          <p>
                            How many servings of water:{' '}
                            <span>{numberRecords}</span>
                          </p>
                        </>
                      </Popup>
                    </Day>
                    <DayPercent>60%</DayPercent>
                  </DayCell>
                );
              })
          : null}
      </DaysContainer>
    </StyledMonthStatsTable>
  );
};

export default Calendar;
