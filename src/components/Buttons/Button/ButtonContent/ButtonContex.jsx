import React from 'react';
import PropTypes from 'prop-types';
import './ButtonContent.scss';
import LoadIcon from './LoadIcon/LoadIcon.jsx';
import ButtonLabel from './ButtonLabel/ButtonLabel.jsx';

const ButtonContent = ({ text, iconUri }) => (
  <div className="button-content">
    { iconUri
      ? <LoadIcon iconUri={iconUri} className="button-content__icon" />
      : null
    }
    <ButtonLabel text={text} className="butten-content__label" />
  </div>
);

ButtonContent.defaultProps = {
  iconUri: '',
};

ButtonContent.propTypes = {
  iconUri: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ButtonContent;
