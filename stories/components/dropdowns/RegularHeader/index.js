import React from 'react';
import { storiesOf } from '@storybook/react';

import Components from '../../../../src/components'
const RegularHeader = Components.Dropdowns.RegularHeader;

export default storiesOf('Dropdown Regular Header', module)
  .add('Expanded', () => <div className='expanded'><RegularHeader text='Expanded header' /></div>)
  .add('Collapsed', () => <div className='collapsed'><RegularHeader text='Collapsed header' /></div>);