import React from 'react';
import { storiesOf } from '@storybook/react';

import RegularHeader from '../../../../src/components/Dropdowns/RegularHeader/RegularHeader.jsx';

export default storiesOf('Dropdown Regular Header', module)
  .add('Expanded', () => <div className="expanded"><RegularHeader text="Expanded header" /></div>)
  .add('Collapsed', () => <div className="collapsed"><RegularHeader text="Collapsed header" /></div>);
