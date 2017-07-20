import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonLabel from '../../../../src/components/Buttons/ButtonLabel/ButtonLabel.jsx';

export default storiesOf('ButtonLabel', module)
  .add('Short text', () => <ButtonLabel text="sample text" />)
  .add('Long text', () => <ButtonLabel text="some long long long long long long text" />);
