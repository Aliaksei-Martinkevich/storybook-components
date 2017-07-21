import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Content.scss';
import Item from '../Item/Item.jsx';

const Content = ({ className = '', onItemClick, children }) => (
  <div className={classNames({
    'dropdown-content': true,
    [className]: true,
  },
  )}
  >
    {
        React.Children.map(children,
          (el, id) => (
            <Item
              onClick={onItemClick}
              key={el.key || id.toString()}
              id={el.key || id.toString()}
            >
              {el}
            </Item>))
    }
  </div>
  );

Content.propTypes = {
  className: PropTypes.string,
  onItemClick: PropTypes.func,
  children: PropTypes.element.isRequired,
};

export default Content;
