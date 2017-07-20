import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonHeader from '../../../../src/components/Dropdowns/ButtonHeader/ButtonHeader.jsx';

export default storiesOf('Dropdown Button Header', module)
  .add('Expanded', () => <div className="expanded"><ButtonHeader text="Expanded header" /></div>)
  .add('Collapsed', () => <div className="collapsed"><ButtonHeader text="Collapsed header" /></div>);
