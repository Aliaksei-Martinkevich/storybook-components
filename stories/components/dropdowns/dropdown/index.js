import React from 'react';
import { storiesOf } from '@storybook/react';

import Components from '../../../../src/components';
const Dropdown = Components.Dropdowns.Dropdown;

export default storiesOf('Dropdown', module)
  .add('No content', () => <Dropdown />);