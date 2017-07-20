import React from 'react';
import PropTypes from 'prop-types';
import './ButtonHeader.scss';
import PrimaryButton from '../../Buttons/PrimaryButton/PrimaryButton.jsx';

const DropdownButton = ({ text = '' }) =>
  (<PrimaryButton text={text} className={'dropdown-button-header'} />);

DropdownButton.propTypes = {
  text: PropTypes.string,
};

export default DropdownButton;
