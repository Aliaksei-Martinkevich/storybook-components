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
  }

  render() {
      return(
          <div className={
            `dropdown-header ${this.props.className} ${this.state.isExpanded
              ? 'expanded' 
              : 'collapsed'} `}
            onClick = {this.onClickHandler}>
            {this.props.children}
          </div>
        );
  }
}

DefaultHeader.defaultProps = {
  className: '',
}

DefaultHeader.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}

export default DefaultHeader;
