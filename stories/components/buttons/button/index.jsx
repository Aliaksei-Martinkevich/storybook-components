import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../../../../src/components/Buttons/Button/Button.jsx';
import blackIcon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';

export default storiesOf('Button', module)
  .add('with text', () => (<Button
    onClick={action('clicked')}
    text="Regular state"
  />))
  .add('with some emoji', () => (<Button
    onClick={action('clicked')}
    text="😀 😎 👍 💯"
  />))
  .add('with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long text"
  />))
  .add('disabled', () => (<Button
    onClick={action('clicked')}
    text="Disabled button"
    disabled
  />))
  .add('processing', () => (<Button
    onClick={action('clicked')}
    text="Processing"
    processing
    iconUri={blackIcon}
  />))
  .add('processing with long text', () => (<Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long long long text"
    processing
    iconUri={blackIcon}
  />));
