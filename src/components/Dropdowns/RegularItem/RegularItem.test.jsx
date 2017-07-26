import React from 'react';
import renderer from 'react-test-renderer';
import RegularItem from './RegularItem';
import icon from '../../../../assets/icons/svg/collapse_arrow-black.svg';

describe('Regular item', () => {
  it('Should render without fails', () => {
    const customClassName = 'class-name-example';
    const text = 'Some text';
    const onClick = jest.fn();
    const component = renderer.create(
      <RegularItem
        className={customClassName}
        text={text}
        iconUri={icon}
        onClick={onClick}
      />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
