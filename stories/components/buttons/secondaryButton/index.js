import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SecondaryButton from '../../../../src/components/Buttons/SecondaryButton';

export default storiesOf('SecondaryButton', module)
  .add('with text', () => <SecondaryButton 
    onClick={action('clicked')} 
    text='Regular state'
    />)
  .add('with some emoji', () => <SecondaryButton 
    onClick={action('clicked')} 
    text='😀 😎 👍 💯'
    />)
  .add('with long text', () => <SecondaryButton
    onClick={action('clicked')}
    text='Some long long long long long long long long long text'
    />)
  .add('disabled', () => <SecondaryButton 
    onClick={action('clicked')} 
    text='Disabled button'
    disabled={true}
    />)
  .add('processing', () => <SecondaryButton
    onClick={action('clicked')}
    text='Processing'
    processing={true}
    />)
  .add('processing with long text', () => <SecondaryButton
    onClick={action('clicked')}
    text='Some long long long long long long long long long long long text'
    processing={true}
/>);
