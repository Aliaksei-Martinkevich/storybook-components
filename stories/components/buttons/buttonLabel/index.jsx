import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonLabel from '../../../../src/components/Buttons/ButtonLabel/ButtonLabel.jsx';
import './index.scss';

export default storiesOf('ButtonLabel', module)
  .add('Short text', () => <ButtonLabel text="sample text" />)
  .add('Long text', () =>
    (<div className="short-container">
      <ButtonLabel className="overflow-label" text="some long long long long long long text" />
    </div>));
