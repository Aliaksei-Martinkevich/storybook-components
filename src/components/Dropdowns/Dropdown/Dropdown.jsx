import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Dropdown.scss';
import Header from '../Header/Header.jsx';
import Content from '../Content/Content.jsx';

class Dropdown extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);
    this.onItemClickHandler = this.onItemClickHandler.bind(this);
  }

  onClickHandler() {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  onItemClickHandler(itemId) {
    if (typeof (this.props.onItemClick) === 'function') {
      this.props.onItemClick(itemId);
    }
  }

  render() {
    return (
      <div className={classNames({
        dropdown: true,
        expanded: this.state.isExpanded,
        collapsed: !this.state.isExpanded,
      },
      )}
      >
        <Header
          onClick={this.onClickHandler}
          className={`${this.state.isExpanded ? 'expanded' : 'collapsed'}`}
        >
          { this.props.header }
        </Header>
        <Content onItemClick={this.onItemClickHandler}>
          { this.props.children }
        </Content>
      </div>);
  }
}

Dropdown.propTypes = {
  header: PropTypes.element,
  onItemClick: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Dropdown;
