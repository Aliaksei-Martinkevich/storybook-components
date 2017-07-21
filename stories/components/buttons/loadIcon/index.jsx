import React from 'react';
import { storiesOf } from '@storybook/react';

import './background-div.scss';
import LoadIcon from '../../../../src/components/Buttons/Button/ButtonContent/LoadIcon/LoadIcon.jsx';
import svgBlackIcon from '../../../../assets/icons/svg/loading-circle-dashes-black.svg';
import svgWhiteIcon from '../../../../assets/icons/svg/loading-circle-dashes-white.svg';
import whiteIcon from '../../../../assets/icons/circle-loading-white.png';
import blackIcon from '../../../../assets/icons/circle-loading-black.png';

export default storiesOf('LoadIcon', module)
  .add('White', () => <div className="icon-white"><LoadIcon iconUri={whiteIcon} /></div>)
  .add('Black', () => <div className="icon-black"><LoadIcon iconUri={blackIcon} /></div>)
  .add('Black svg', () => <div className="icon-black"><LoadIcon iconUri={svgBlackIcon} /></div>)
  .add('White svg', () => <div className="icon-white"><LoadIcon iconUri={svgWhiteIcon} /></div>)
;
