import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

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

  //TODO
  onItemClickHandler(itemId) {
    console.log(itemId);
  }

  render() { 
    return (
      <div className={`dropdown ${this.state.isExpanded ? 'expanded' : 'collapsed'}`}>
        <Header onClick={ this.onClickHandler }>
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
