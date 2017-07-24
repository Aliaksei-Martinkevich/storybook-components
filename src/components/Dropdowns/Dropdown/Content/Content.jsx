import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Content.scss';
import Item from './Item/Item.jsx';

const Content = ({ className = '', onItemClick, children, expanded = false }) => (
  <div className={classNames('dropdown-content', className, {
    expanded,
    collapsed: !expanded })}
  >
    {
        React.Children.map(children,
          (el, id) => (
            <Item
              className="dropdown-content__item"
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  expanded: PropTypes.bool,
};

export default Content;
