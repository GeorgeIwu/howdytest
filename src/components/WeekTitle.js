import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  width: 100%;
  height: 50px;
  padding: 3px;
  border: 1px solid #000;
  background: grey;
  color: #fff;
  text-align: center;
`;


const WeekTitle = ({ name }) => {

  return (
    <StyledDiv>{name}</StyledDiv>
  );
};

export default WeekTitle;
