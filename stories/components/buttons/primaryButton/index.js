import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import PrimaryButton from '../../../../src/components/Buttons/PrimaryButton';
import './overrided.scss';


export default storiesOf('PrimaryButton', module)
  .add('with text', () => <PrimaryButton 
    onClick={action('clicked')} 
    text='Regular state'
    />)
  .add('with some emoji', () => <PrimaryButton 
    onClick={action('clicked')} 
    text='😀 😎 👍 💯'
    />)
  .add('with long text', () => <PrimaryButton
    onClick={action('clicked')}
    text='Some long long long long long long long long long text'
    />)
  .add('disabled', () => <PrimaryButton 
    onClick={action('clicked')} 
    text='Disabled button'
    disabled={true}
    />)
  .add('processing', () => <PrimaryButton
    onClick={action('clicked')}
    text='Processing'
    processing={true}
    />)
  .add('processing with long text', () => <PrimaryButton
    onClick={action('clicked')}
    text='Some long long long long long long long long long long long text'
    processing={true}
    />)
  .add('Overrided style', () => <PrimaryButton
    onClick={action('clicked')}
    text='Overrided styles'
    processing={false}
    className='styleOne styleTwo'
    />);
