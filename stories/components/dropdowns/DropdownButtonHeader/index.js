import React from 'react';
import { storiesOf } from '@storybook/react';

import Components from '../../../../src/components'
const DropdownButtonHeader = Components.Dropdowns.DropdownButtonHeader;

export default storiesOf('Dropdown Button Header', module)
  .add('Expanded', () => <div className='expanded'><DropdownButtonHeader text='Expanded header' /></div>)
  .add('Collapsed', () => <div className='collapsed'><DropdownButtonHeader text='Collapsed header' /></div>);