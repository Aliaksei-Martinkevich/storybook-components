import React from 'react';
import renderer from 'react-test-renderer';
import ButtonHeader, { BUTTON_HEADER_THEMES } from './ButtonHeader.jsx';

describe('Button header', () => {
  it('Should be collapsed', () => {
    const customClassName = 'class-name-example';
    const text = 'Some text';
    const component = renderer.create(
      <ButtonHeader
        theme={BUTTON_HEADER_THEMES.DEFAULT}
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
      <ButtonHeader
        className={customClassName}
        text={text}
        expanded
      />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
