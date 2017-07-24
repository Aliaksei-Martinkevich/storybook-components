import React from 'react';
import { storiesOf } from '@storybook/react';

import RegularHeader from '../../../../src/components/Dropdowns/RegularHeader/RegularHeader.jsx';

export default storiesOf('Dropdown Regular Header', module)
  .add('Expanded', () => <RegularHeader expanded text="Expanded header" />)
  .add('Collapsed', () => <RegularHeader text="Collapsed header" />);
