import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import LoadIcon from '../LoadIcon';
import ButtonLabel from '../ButtonLabel';

const ButtonContent = ({text, iconUri}) => (
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
}

export default ButtonContent;
