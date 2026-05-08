import { FC, useState } from 'react';
import { SCHEDULE_DAY_1, SCHEDULE_DAY_2 } from 'constants/general';
import clsx from 'clsx';
import ScheduleItem from './ScheduleItem/ScheduleItem';

import styles from './ScheduleSection.module.scss';

const ScheduleSection: FC = () => {
  const [activeTab, setActiveTab] = useState<'day1' | 'day2'>('day1');

  return (
    <section id="schedule" className={styles['schedule-section-wrapper']}>
      <h2>Schedule</h2>
      <div className={styles['schedule-buttons-wrapper']} role="tablist" aria-label="Schedule days">
        <button
          type="button"
          role="tab"
          id="tab-day1"
          aria-selected={activeTab === 'day1'}
          aria-controls="tabpanel-day1"
          tabIndex={activeTab === 'day1' ? 0 : -1}
          className={clsx(styles['day-01'], {
            [styles.active]: activeTab === 'day1',
          })}
          onClick={() => setActiveTab('day1')}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              setActiveTab('day2');
              document.getElementById('tab-day2')?.focus();
            }
          }}
        >
          <h3 className={styles.text}>Day 01</h3>
          <span className={styles.date}>TBA</span>
          <div className={styles.arrow} aria-hidden="true">
            <div className={styles['gradient-triangle']} />
          </div>
        </button>
        <button
          type="button"
          role="tab"
          id="tab-day2"
          aria-selected={activeTab === 'day2'}
          aria-controls="tabpanel-day2"
          tabIndex={activeTab === 'day2' ? 0 : -1}
          className={clsx(styles['day-02'], {
            [styles.active]: activeTab === 'day2',
          })}
          onClick={() => setActiveTab('day2')}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              setActiveTab('day1');
              document.getElementById('tab-day1')?.focus();
            }
          }}
        >
          <h3 className={styles.text}>Day 02</h3>
          <span className={styles.date}>TBA</span>
          <div className={styles.arrow} aria-hidden="true">
            <div className={styles['gradient-triangle']} />
          </div>
        </button>
      </div>
      <div
        role="tabpanel"
        id="tabpanel-day1"
        aria-labelledby="tab-day1"
        className={clsx(styles['schedule-content-wrapper'], {
          [styles.active]: activeTab === 'day1',
        })}
        hidden={activeTab !== 'day1'}
      >
        {SCHEDULE_DAY_1.map((item) => (
          <ScheduleItem key={item.title} item={item} />
        ))}
      </div>
      <div
        role="tabpanel"
        id="tabpanel-day2"
        aria-labelledby="tab-day2"
        className={clsx(styles['schedule-content-wrapper'], {
          [styles.active]: activeTab === 'day2',
        })}
        hidden={activeTab !== 'day2'}
      >
        {SCHEDULE_DAY_2.map((item) => (
          <ScheduleItem key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
