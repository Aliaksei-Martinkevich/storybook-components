import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.css';

class DefaultHeader extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  
  onClickHandler(...params) {
    this.setState((prevState, props) => {
      return { isExpanded: !prevState.isExpanded };
    });

    this.props.onClick(...params);
  }

  render() {
    return (
      <div className={
          `dropdown-header 
          ${this.props.className} 
          ${this.state.isExpanded 
            ? 'expanded' 
            : 'collapsed'}`}
        title={this.props.text}
        onClick = {this.onClickHandler}>
        <span className='dropdown-header-text'>
          {this.props.text}
        </span>
      </div>
    );
  }
}

DefaultHeader.defaultProps = {
  className: '',
}

DefaultHeader.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default DefaultHeader;
