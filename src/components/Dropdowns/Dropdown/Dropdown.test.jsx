import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('Should expands on click', () => {
    const customClassName = 'class-name-example';
    const Header = (<div>Header</div>);
    const onItemClick = jest.fn();
    const component = renderer.create(
      <Dropdown
        header={Header}
        className={customClassName}
        onItemClick={onItemClick}
      >
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </Dropdown>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.children[0].props.onClick();
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    tree.children[1].children.forEach(elem => elem.props.onClick());
    expect(onItemClick.mock.calls).toEqual([['0'], ['1'], ['2']]);
  });
});
