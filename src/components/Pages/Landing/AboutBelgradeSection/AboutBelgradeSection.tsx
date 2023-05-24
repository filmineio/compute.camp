import { FC } from 'react';

import styles from './AboutBelgradeSection.module.scss';

const AboutBelgradeSection: FC = () => (
  <div id="about-belgrade" className={styles['about-belgrade-section-wrapper']}>
    <h2>About Belgrade</h2>
    <div className={styles['about-belgrade-section-content']}>
      <p>
        Discover Belgrade, Serbia’s captivating capital where history and innovation
        converge. Immerse yourself in its rich culture, indulge in delectable cuisine, and
        experience the dynamic blend of modernity and tradition. Join us at Compute Camp,
        the exciting blockchain conference, and shape the future of technology in this
        vibrant city.
      </p>
    </div>
  </div>
);

export default AboutBelgradeSection;
