import { FC } from 'react';
import clsx from 'clsx';

import styles from './ScheduleItem.module.scss';

type Props = {
  item: {
    type: string;
    time: string;
    label: string;
    author: string;
    title: string;
    description: string;
  };
};

const ScheduleItem: FC<Props> = ({ item }) => (
  <div className={styles['schedule-item-wrapper']}>
    <div className={styles['schedule-item-info']}>
      <div className={styles['schedule-item-info-type-time']}>
        <span className={clsx(styles.type, styles[item.type.toLowerCase()])}>
          {item.type}
        </span>
        <span className={styles.time}>{item.time}</span>
      </div>
      <p className={styles.label}>{item.label}</p>
      <p className={styles.author}>{item.author}</p>
    </div>
    <div className={styles['schedule-item-description']}>
      <h6>{item.title}</h6>
      <p>{item.description}</p>
    </div>
  </div>
);

export default ScheduleItem;
