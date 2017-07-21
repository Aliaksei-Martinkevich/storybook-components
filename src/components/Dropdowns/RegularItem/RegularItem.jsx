import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './RegularItem.scss';
import Remark from '../Remark/Remark.jsx';


const RegularItem = ({ onClick, text, className = '', remark = '', iconUri = '' }) => {
  const iconImageStyle = {
    backgroundImage: `url(${iconUri})`,
    paddingLeft: '25px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '2.5px center',
    backgroundSize: '20px',
  };

  return (
    <div
      onClick={onClick}
      className={classNames({
        'dropdown-regular-item': true,
        [className]: true,
      })}
      style={iconUri ? iconImageStyle : undefined}
      title={text}
    >
      {text}
      { remark ? <Remark text={remark} /> : '' }
    </div>
  );
};

RegularItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
  remark: PropTypes.string,
  iconUri: PropTypes.string,
};

export default RegularItem;
