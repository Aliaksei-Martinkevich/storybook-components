import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './LoadIcon.scss';

const LoadIcon = ({ iconUri, className }) => (
  <img
    className={classNames('load-icon', className)}
    alt=""
    src={iconUri}
  />
);

LoadIcon.defaultProps = {
  className: '',
};

LoadIcon.propTypes = {
  iconUri: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LoadIcon;
