import React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonContent from '../../../../src/components/Buttons/ButtonContent/ButtonContex.jsx';
import blackIcon from '../../../../assets/icons/circle-loading-black.png';

export default storiesOf('ButtonContent', module)
  .add('Short text', () => <ButtonContent text="sample text" />)
  .add('Long text', () => <ButtonContent text="some long long long long long long text" />)
  .add('Text with icon', () => <ButtonContent text="content with ico" iconUri={blackIcon} />);
