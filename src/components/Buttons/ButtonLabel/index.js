import React from 'react';
import PropTypes from 'prop-types';
import './index.css';


const ButtonLabel = ({text}) => (
<span className={'button-label'}>
  {text}
</span>
);

ButtonLabel.propTypes = {
  text: PropTypes.string.isRequired,
}

export default ButtonLabel;
