// @flow

import React, { Component } from 'react';
import Header from './Header';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: 0;
  line-height: 20px;
  padding: 8px 16px;
`;

class List extends Component {
  state = {
    newTodo: '',
    todos: {}
  };

  componentDidMount() {}

  handleNewTodo = (event: SyntheticKeyboardEvent & { target: HTMLInputElement }) => {
    this.setState({ newTodo: event.target.value });
  };

  handleFormSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="List">
        <Header />
        <form onSubmit={this.handleFormSubmit}>
          <StyledInput onChange={this.handleNewTodo} value={this.state.newTodo} placeholder="What needs to be done?" />
        </form>
      </div>
    );
  }
}

export default List;
