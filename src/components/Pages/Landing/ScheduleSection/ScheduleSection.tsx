import { FC, useEffect, useReducer, useRef, useState } from 'react';
import { SCHEDULE_DAY_1, SCHEDULE_DAY_2 } from 'constants/general';
import clsx from 'clsx';
import ScheduleItem from './ScheduleItem/ScheduleItem';

import styles from './ScheduleSection.module.scss';

const ScheduleSection: FC = () => {
  const [isFirstDayActive, setIsFirstDayActive] = useState(true);
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const contentEl1 = useRef<HTMLDivElement>(null);
  const contentEl2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    forceUpdate();
  }, []);

  return (
    <div id="schedule" className={styles['schedule-section-wrapper']}>
      <h2>Schedule</h2>
      <div className={styles['schedule-buttons-wrapper']}>
        <button
          type="button"
          className={clsx(styles['day-01'], {
            [styles.active]: isFirstDayActive,
          })}
          onClick={() => setIsFirstDayActive(true)}
        >
          <span className={styles.text}>Day 01</span>
          <span className={styles.date}>Wed, June 7</span>
          <div className={styles.arrow}>
            <div className={styles['gradient-triangle']} />
          </div>
        </button>
        <button
          type="button"
          className={clsx(styles['day-02'], {
            [styles.active]: !isFirstDayActive,
          })}
          onClick={() => setIsFirstDayActive(false)}
        >
          <span className={styles.text}>Day 02</span>
          <span className={styles.date}>Thu, June 8</span>
          <div className={styles.arrow}>
            <div className={styles['gradient-triangle']} />
          </div>
        </button>
      </div>
      <div
        className={clsx(styles['schedule-content-wrapper'], {
          [styles.active]: isFirstDayActive,
        })}
        ref={contentEl1}
        style={
          isFirstDayActive
            ? { height: contentEl1?.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        {SCHEDULE_DAY_1.map((item) => (
          <ScheduleItem key={item.description} item={item} />
        ))}
      </div>
      <div
        className={clsx(styles['schedule-content-wrapper'], {
          [styles.active]: !isFirstDayActive,
        })}
        ref={contentEl2}
        style={
          !isFirstDayActive
            ? { height: contentEl2?.current?.scrollHeight }
            : { height: '0px' }
        }
      >
        {SCHEDULE_DAY_2.map((item) => (
          <ScheduleItem key={item.description} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleSection;
