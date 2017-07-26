import React from 'react';
import renderer from 'react-test-renderer';
import LoadIcon from './LoadIcon.jsx';
import icon from '../../../../../../assets/icons/svg/loading-circle-dashes-black.svg';

it('Should render without fails', () => {
  const customClassName = 'class-name-example';
  const component = renderer.create(<LoadIcon className={customClassName} iconUri={icon} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
