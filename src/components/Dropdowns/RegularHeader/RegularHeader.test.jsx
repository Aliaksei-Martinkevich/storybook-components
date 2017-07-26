import React from 'react';
import renderer from 'react-test-renderer';
import RegularHeader from './RegularHeader.jsx';

describe('Regular header', () => {
  it('Should be collapsed', () => {
    const customClassName = 'class-name-example';
    const text = 'Some text';
    const component = renderer.create(
      <RegularHeader
        className={customClassName}
        text={text}
      />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should be expanded', () => {
    const customClassName = 'class-name-example';
    const text = 'Some text';
    const component = renderer.create(
      <RegularHeader
        className={customClassName}
        text={text}
        expanded
      />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});