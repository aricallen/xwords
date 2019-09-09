import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 1px solid black;
`;

const Number = styled('div')`
  padding-left: 4px;
  padding-top: 2px;
  min-height: 12px;
  font-size: 9px;
`;

const Value = styled('div')`
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

const Blank = styled(Wrapper)`
  background-color: black;
`;

export const Cell = ({ cell }) => {
  const { number, value } = cell;
  if (number === null && value === null) {
    return <Blank />;
  }
  return (
    <Wrapper>
      <Number>{number}</Number>
      <Value>{value}</Value>
    </Wrapper>
  );
};