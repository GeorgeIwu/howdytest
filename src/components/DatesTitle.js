import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row,
  width: 100%;
`;

const TimeLeft = styled.span`
  display: flex;
  flex:direction: row;
  width: calc(100%/9 * 2);
  height: 50px;
  padding: 15px;
  border: 1px solid #000;
  text-align: center;
`;

const TimeRight = styled.span`
  display: flex;
  flex:direction: row;
  width: calc(100%/9);
  height: 50px;
  padding: 15px;
  border: 1px solid #000;
  text-align: center;
`;

const Time = styled.div`
  width: calc(100%/9);
  padding: 15px;
  height: 50px;
  border: 1px solid #000;
  text-align: center;
`;

const TimeDiv = styled.div`
  width: 80%;
  text-align: center;
`;

const Icon = styled.div`
  // width: 100%;
  height: 50px;
  padding: 6px;
  font-family: 'Material Icons', serif;
  font-style: normal;
  text-align: center;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  font-feature-settings: 'liga';
`;



const DatesTitle = ({ week, formatter, page, setPage }) => {
  const firstWeekDates = week[0].dates

  const onClickNext = () => {
    setPage(page + 1);
  };

  const onClickPrevious = () => {
    setPage(page ? page - 1 : 0);
  };

  return (
    <Container>
      <TimeLeft><Icon onClick={onClickPrevious}> {`<<`} </Icon><TimeDiv>{formatter(firstWeekDates[0], "hh: mm")}</TimeDiv></TimeLeft>
      {firstWeekDates.slice(1, firstWeekDates.length-1).map((date, i) => <Time key={i}>{formatter(date, "hh: mm")}</Time>)}
      <TimeRight><TimeDiv>{formatter(firstWeekDates[firstWeekDates.length-1], "hh: mm")}</TimeDiv><Icon onClick={onClickNext}> {`>>`} </Icon></TimeRight>
    </Container>
  );
};

export default DatesTitle;
