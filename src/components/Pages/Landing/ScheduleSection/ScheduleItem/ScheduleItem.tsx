import { FC, ReactElement } from 'react';
import clsx from 'clsx';

import styles from './ScheduleItem.module.scss';

type Props = {
  item: {
    type: string;
    time: string;
    label?: string;
    author?: string;
    title: string;
    description?: string | ReactElement;
  };
};

const ScheduleItem: FC<Props> = ({ item }) => (
  <div className={styles['schedule-item-wrapper']}>
    <div className={styles['schedule-item-info']}>
      <div className={styles['schedule-item-info-type-time']}>
        <h4 className={clsx(styles.type, styles[item.type.toLowerCase()])}>
          {item.type}
        </h4>
        <span className={styles.time}>{item.time}</span>
      </div>
      {item.label && <p className={styles.label}>{item.label}</p>}
      {item.author && <p className={styles.author}>{item.author}</p>}
    </div>
    <div className={styles.divider} />
    <div className={styles['schedule-item-description']}>
      {item.title && <h5>{item.title}</h5>}
      {item.description && <p>{item.description}</p>}
    </div>
  </div>
);

export default ScheduleItem;
