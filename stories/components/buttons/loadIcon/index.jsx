import React from 'react';
import { storiesOf } from '@storybook/react';

import './background-div.scss';
import LoadIcon from '../../../../src/components/Buttons/Button/ButtonContent/LoadIcon/LoadIcon.jsx';
import svgBlackIcon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';
import svgWhiteIcon from '../../../../assets/icons/svg/loading-circle-dashes-white.svg';

export default storiesOf('LoadIcon', module)
  .add('Black', () => <div className="icon-black"><LoadIcon iconUri={svgBlackIcon} /></div>)
  .add('White', () => <div className="icon-white"><LoadIcon iconUri={svgWhiteIcon} /></div>)
;
