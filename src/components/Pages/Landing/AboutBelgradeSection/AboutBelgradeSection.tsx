import { FC } from 'react';
import Illustration2 from 'components/Common/Icons/Illustration2';

import styles from './AboutBelgradeSection.module.scss';

const AboutBelgradeSection: FC = () => (
  <div id="about-belgrade" className={styles['about-belgrade-section-wrapper']}>
    <h2>About Belgrade</h2>
    <p>
      Lorem ipsum dolore smith lorem ipsum dolore smith lorem ipsum dolore smith lorem
      ipsum dolore smith lorem ipsum dolore smith
    </p>
    <Illustration2 />
  </div>
);

export default AboutBelgradeSection;
