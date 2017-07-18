import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import Buttons from '../../Buttons';
const PrimaryButton = Buttons.PrimaryButton;

const DropdownButton = ({className = '', text = ''}) => {
  return (<PrimaryButton text={text} className={`dropdown-button-header`}/>);
};

DropdownButton.defaultProps = {
  className: '',
}

DropdownButton.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
}

export default DropdownButton;
