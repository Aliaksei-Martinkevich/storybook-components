import React from 'react';
import PropTypes from 'prop-types';
import './LoadIcon.scss';

const LoadIcon = ({ iconUri }) => (
  <img
    className="load-icon"
    alt=""
    src={iconUri}
  />
);

LoadIcon.propTypes = {
  iconUri: PropTypes.string.isRequired,
};

export default LoadIcon;
