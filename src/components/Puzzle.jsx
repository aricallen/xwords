import React from 'react';
import styled from '@emotion/styled';
import { Row } from './Row';

const Wrapper = styled('div')`
  border: 1px solid black;
  display: inline-block;
`;

export const Puzzle = ({ puzzle }) => {
  return (
    <Wrapper>
      {puzzle.map((row, i) => <Row key={i} row={row} />)}
    </Wrapper>
  );
};
