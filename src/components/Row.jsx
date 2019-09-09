import React from 'react';
import styled from '@emotion/styled';
import { Cell } from './Cell';

const Wrapper = styled('div')`
  display: flex;
  height: 40px;
`;

export const Row = ({ row }) => {
  return (
    <Wrapper>
      {row.map((cell, i) => <Cell key={i} cell={cell} />)}
    </Wrapper>
  );
};
