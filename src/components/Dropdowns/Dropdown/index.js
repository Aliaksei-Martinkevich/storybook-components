import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import Header from '../Header';
import Content from '../Content';

class Dropdown extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    }

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState((prevState, props) => {
      return { isExpanded: !prevState.isExpanded };
    });
  }

  onItemClickHandler(itemId) {
    if (typeof (this.props.onItemClick) === 'function') {
      this.props.onItemClick(itemId);
    }
  }

  render() { 
    return (
      <div className={`dropdown ${this.state.isExpanded ? 'expanded' : 'collapsed'}`}>
        <Header onClick={ this.onClickHandler } className={`${this.state.isExpanded ? 'expanded' : 'collapsed'}`}>
          { this.props.header }
        </Header>
        <Content onItemClick={this.onItemClickHandler}>
          { this.props.children }
        </Content>
      </div>)
  };
};

Dropdown.propTypes = {
  header: PropTypes.element,
}

export default Dropdown;
