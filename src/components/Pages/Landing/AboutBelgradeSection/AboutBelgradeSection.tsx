import { FC } from 'react';

import styles from './AboutBelgradeSection.module.scss';

const AboutBelgradeSection: FC = () => (
  <div id="about-belgrade" className={styles['about-belgrade-section-wrapper']}>
    <h2>About Belgrade</h2>
    <div className={styles['about-belgrade-section-content']}>
      <p>
        Lorem ipsum dolore smith lorem ipsum dolore smith lorem ipsum dolore smith lorem
        ipsum dolore smith lorem ipsum dolore smith
      </p>
    </div>
  </div>
);

export default AboutBelgradeSection;
