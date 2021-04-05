import React, { useState, useEffect } from 'react';
import useDate from './api/useDate'
import useSlot from './api/useSlot'
import Cell from './components/Cell';
import DatesTitle from './components/DatesTitle';
import WeekTitle from './components/WeekTitle.js';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;

const Cells = styled.div`
  display: flex;
  flex-direction: column,
  width: 100%;
`;

const USER = { id: 9828929, name: "john", email: "john_doe@gmail.com" }
const MAX_TIME_RANGE = 8
const FROM_DATE = new Date("Mon Apr 5 00:00:00 +0000 2021")

const App = () => {
  const {slots, onAdd} = useSlot(FROM_DATE)
  const {weekDates, formatDate} = useDate(FROM_DATE);
  const [page, setPage] = useState(0)
  const [pageDates, setPageDates] = useState(weekDates)

  useEffect(() => {
    const dates = weekDates.map(({ dates, ...rest }) => {
      const startIndex = page * MAX_TIME_RANGE
      const newDates =  dates.slice(startIndex, startIndex +  MAX_TIME_RANGE)
      return { dates: newDates, ...rest}
    })

    setPageDates(dates)
  }, [page]);

  return (
    <Container>
      <DatesTitle week={pageDates} formatter={formatDate} page={page} setPage={setPage} />
      {pageDates.map(({name, dates }, index) =>
        <Cells key={index}>
          <WeekTitle name={name} />
          {dates.map((date, i) => <Cell date={date} slot={slots[date.valueOf()]} user={USER} onAdd={onAdd} key={i} />)}
        </Cells>
      )}
    </Container>
  );
};

export default App;
