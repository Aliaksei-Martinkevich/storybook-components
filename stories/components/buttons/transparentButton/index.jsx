import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import icon from '../../../../assets/icons/svg/loading-circle-dashes-white.svg';
import Button from '../../../../src/components/Buttons/Button/Button.jsx';

import './background.scss';

export default storiesOf('Transparent Button', module)
  .add('with text', () =>
    (<div className="background"><Button
      onClick={action('clicked')}
      text="Regular state"
      theme="transparent"
    /></div>))
  .add('with some emoji', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="😀 😎 👍 💯"
    theme="transparent"
  /></div>))
  .add('with long text', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long text"
    theme="transparent"
  /></div>))
  .add('disabled', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Disabled button"
    disabled
    theme="transparent"
  /></div>))
  .add('processing', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Processing"
    processing
    iconUri={icon}
    theme="transparent"
  /></div>))
  .add('processing with long text', () => (<div className="background"><Button
    onClick={action('clicked')}
    text="Some long long long long long long long long long long long text"
    processing
    iconUri={icon}
    theme="transparent"
  /></div>));
