import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './button-default.scss';
import './Button.scss';
import ButtonContent from '../ButtonContent/ButtonContex.jsx';

const Button = ({
  text,
  onClick = undefined,
  disabled = false,
  processing = false,
  iconUri = undefined,
  className = '',
}) => (
  <button
    className={classNames('button', 'button-default', className, { button_processing: processing })}
    onClick={onClick}
    disabled={disabled}
    title={text}
  >
    <ButtonContent iconUri={processing ? iconUri : undefined} text={text} />
  </button>
  );

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  processing: PropTypes.bool,
  iconUri: PropTypes.any,
  className: PropTypes.string,
};

export default Button;
