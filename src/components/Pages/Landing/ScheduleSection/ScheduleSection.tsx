import { FC } from 'react';
import { SCHEDULE } from 'constants/general';
import ScheduleItem from './ScheduleItem/ScheduleItem';

import styles from './ScheduleSection.module.scss';

const ScheduleSection: FC = () => (
  <div className={styles['schedule-section-wrapper']}>
    <div className={styles['schedule-buttons-wrapper']}>
      <button type="button" className={styles['day-01']}>
        <span>Day 01</span>
        <span>Wed, June 7</span>
      </button>
      <button type="button" className={styles['day-02']}>
        <span>Day 02</span>
        <span>Thu, June 8</span>
      </button>
    </div>
    <div className={styles['schedule-content-wrapper']}>
      {SCHEDULE.map((item) => (
        <ScheduleItem key={item.description} item={item} />
      ))}
    </div>
  </div>
);

export default ScheduleSection;
