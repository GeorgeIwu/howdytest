import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 3px;
  border: 1px solid #000;
  text-align: center;

  &:hover {
      background: gray;
      color: white;
      transition: 0.5s ease-out;
  }
`;

const Cell = ({ date, slot, onAdd, user  }) => {
  const count = slot ? slot.count : 0

  const onClickCell = () => {
    onAdd({date, user});
  };

  return (
    <StyledDiv onClick={onClickCell}>
      <span>{count}</span>
    </StyledDiv>
  );
};

export default Cell;
