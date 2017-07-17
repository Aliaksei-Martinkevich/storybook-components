import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

import Headers from '../DropdownHeaders';
import Contents from '../DropdownContents';
const Header = Headers.Header;
const Content = Contents.Content;

class Dropdown extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    }

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState((prevState, props) => {
      return { isExpanded: !prevState.isExpanded };
    });
  }


  render() { 
    return (
      <div className={`dropdown ${this.state.isExpanded ? 'expanded' : 'collapsed'}`}>
        <Header onClick={ this.onClickHandler }>
          { this.props.header }
        </Header>
        <Content>
          { this.props.children }
        </Content>
      </div>)
  };
};

Dropdown.propTypes = {
  header: PropTypes.element,

}

export default Dropdown;
