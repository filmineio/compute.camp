import { FC } from 'react';
import Illustration1 from 'components/Common/Icons/Illustration1';
import Star from 'components/Common/Icons/Star';

import styles from './InitSection.module.scss';

const InitSection: FC = () => (
  <div className={styles['init-section-wrapper']}>
    <div className={styles['init-section-text']}>
      <p>June 7th & 8th, 2023 Belgrade, Serbia</p>
      <h1>
        A gathering of compute science enthusiasts innovating in the different computing
      </h1>
      <div className={styles['buttons-wrapper']}>
        <button type="button" className="button primary">
          Submit a Talk
          <Star />
        </button>
        <button type="button" className="button secondary">
          Get Tickets Now
          <Star />
        </button>
      </div>
    </div>
    <div className={styles['init-section-illustration']}>
      <Illustration1 />
    </div>
  </div>
);

export default InitSection;
