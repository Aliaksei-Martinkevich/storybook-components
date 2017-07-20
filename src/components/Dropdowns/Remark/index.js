import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Remark = ({ text }) => (<span className='remark'>{text}</span>);

Remark.propTypes = {
  text: PropTypes.string,
};

export default Remark;
