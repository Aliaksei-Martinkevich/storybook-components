import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import LoadIcon from '../LoadIcon';
import ButtonLabel from '../ButtonLabel';

const ButtonContent = ({text, iconUri}) => (
  <div className={'butten-content'}>
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
}

export default ButtonContent;
