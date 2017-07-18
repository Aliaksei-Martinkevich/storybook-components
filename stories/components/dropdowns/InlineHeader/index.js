import React from 'react';
import { storiesOf } from '@storybook/react';

import Components from '../../../../src/components'
const InlineHeader = Components.Dropdowns.InlineHeader;

export default storiesOf('Dropdown Inline Header', module)
  .add('Expanded', () => <div className='expanded'><InlineHeader text='Expanded header' /></div>)
  .add('Collapsed', () => <div className='collapsed'><InlineHeader text='Collapsed header' /></div>);