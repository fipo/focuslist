// @flow

import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: var(--background-color);
  text-align: center;
  padding: 32px 0;
  border-bottom: 1px solid var(--color);

  h1 {
    color: var(--h1-color);
    font-size: var(--h1-font-size);
    font-weight: var(--h1-font-weight);
  }
`;

const Header = () =>
  <StyledHeader>
    <h1>Today's List</h1>
  </StyledHeader>;

export default Header;
