import React from 'react';
import renderer from 'react-test-renderer';
import Button, { BUTTON_THEMES } from './Button.jsx';
import icon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';

it('Should render without fails', () => {
  const customClassName = 'class-name-example';
  const text = 'Some text';
  const component = renderer.create(
    <Button
      className={customClassName}
      text={text}
      theme={BUTTON_THEMES.DEFAULT}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Should add processing class', () => {
  const customClassName = 'class-name-example';
  const text = 'Some text';
  const component = renderer.create(
    <Button
      className={customClassName}
      text={text}
      iconUri={icon}
      processing
      theme={BUTTON_THEMES.DEFAULT}
    />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
