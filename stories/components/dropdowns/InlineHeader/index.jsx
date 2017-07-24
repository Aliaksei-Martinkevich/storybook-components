import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineHeader from '../../../../src/components/Dropdowns/InlineHeader/InlineHeader.jsx';

export default storiesOf('Dropdown Inline Header', module)
  .add('Expanded', () => <InlineHeader expanded text="Expanded header" />)
  .add('Collapsed', () => <InlineHeader text="Collapsed header" />);
