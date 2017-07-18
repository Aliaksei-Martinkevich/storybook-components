import React from 'react';
import { storiesOf } from '@storybook/react';

import Components from '../../../../src/components'
const ButtonHeader = Components.Dropdowns.ButtonHeader;

export default storiesOf('Dropdown Button Header', module)
  .add('Expanded', () => <div className='expanded'><ButtonHeader text='Expanded header' /></div>)
  .add('Collapsed', () => <div className='collapsed'><ButtonHeader text='Collapsed header' /></div>);