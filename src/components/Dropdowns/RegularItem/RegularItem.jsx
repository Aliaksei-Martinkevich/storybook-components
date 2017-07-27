import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RegularItem.scss';
import Remark from './Remark/Remark.jsx';


const RegularItem = ({ onClick, text, className, remark, iconUri }) => (
  <div
    onClick={onClick}
    className={classNames('dropdown-regular-item', className)}
    title={text}
  >
    {iconUri && <img className="dropdown-regular-item__icon" src={iconUri} alt="" />}
    <span>{text}</span>
    {remark && <Remark className="dropdown-regular-item__remark" text={remark} />}
  </div>
  );

RegularItem.defaultProps = {
  onClick: undefined,
  className: '',
  remark: '',
  iconUri: '',
};

RegularItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  remark: PropTypes.string,
  iconUri: PropTypes.string,
};

export default RegularItem;
