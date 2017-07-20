import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineHeader from '../../../../src/components/Dropdowns/InlineHeader/InlineHeader.jsx';

export default storiesOf('Dropdown Inline Header', module)
  .add('Expanded', () => <div className="expanded"><InlineHeader text="Expanded header" /></div>)
  .add('Collapsed', () => <div className="collapsed"><InlineHeader text="Collapsed header" /></div>);
