import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonHeader from '../../../../src/components/Dropdowns/ButtonHeader/ButtonHeader.jsx';

export default storiesOf('Dropdown Button Header', module)
  .add('Expanded', () => <ButtonHeader expanded text="Expanded header" />)
  .add('Collapsed', () => <ButtonHeader text="Collapsed header" />);
