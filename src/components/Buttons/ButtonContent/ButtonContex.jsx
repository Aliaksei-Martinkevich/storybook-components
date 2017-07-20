import React from 'react';
import PropTypes from 'prop-types';
import './ButtonContent.scss';
import LoadIcon from '../LoadIcon/LoadIcon.jsx';
import ButtonLabel from '../ButtonLabel/ButtonLabel.jsx';

const ButtonContent = ({ text, iconUri = '' }) => (
  <div className={'button-content'}>
    { iconUri
      ? <LoadIcon iconUri={iconUri} />
      : null
    }
    <ButtonLabel text={text} />
  </div>
);

ButtonContent.propTypes = {
  iconUri: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default ButtonContent;
