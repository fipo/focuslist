// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './global-styles.css';
import List from './List';

const StyledApp = styled.div`
  border: 1px solid var(--color);
  border-radius: 5px;
  width: 400px;
  margin: 10px auto;
  overflow: hidden;
`;

const FourOhFour = () => <h1>404</h1>;

const App = () =>
  <BrowserRouter>
    <StyledApp>
      <Switch>
        <Route exact path="/" component={List} />
        <Route component={FourOhFour} />
      </Switch>
    </StyledApp>
  </BrowserRouter>;

export default App;
