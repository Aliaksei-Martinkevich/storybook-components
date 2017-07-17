import React from 'react';
import { storiesOf } from '@storybook/react';

import Components from '../../../../src/components';
const Dropdown = Components.Dropdowns.Dropdown;

export default storiesOf('Dropdown', module)
  .add('No content', () => 
  <Dropdown header='Click me'>
    <div>Element one</div>
    <div>Element two</div>
    <div>Element three</div>
    <div>Element four</div>
  </Dropdown>)
  ;