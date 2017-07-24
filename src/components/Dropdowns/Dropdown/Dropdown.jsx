import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Dropdown.scss';
import Header from './Header/Header.jsx';
import Content from './Content/Content.jsx';

class Dropdown extends Component {

  state = {
    isExpanded: false,
  };

  onHeaderClickHandler = () => {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }

  onItemClickHandler = (itemId) => {
    this.props.onItemClick(itemId);
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
          className="dropdown__header"
          onClick={this.onHeaderClickHandler}
          expanded={this.state.isExpanded}
        >
          {this.props.header}
        </Header>
        <Content
          expanded={this.state.isExpanded}
          className="dropdown__content"
          onItemClick={this.onItemClickHandler}
        >
          {this.props.children}
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
