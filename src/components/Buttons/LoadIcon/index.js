import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const LoadIcon = ({iconUri}) => (
<img 
  className={'load-icon'} 
  alt='' 
  src={iconUri}>
</img>
);

LoadIcon.propTypes = {
  iconUri: PropTypes.string.isRequired,
}

export default LoadIcon;
