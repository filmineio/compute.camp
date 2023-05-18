import { FC } from 'react';
import clsx from 'clsx';

import styles from './Arrow.module.scss';

type Props = {
  rotate?: boolean;
};

const Arrow: FC<Props> = ({ rotate = false }) => (
  <div className={clsx(styles['arrow-wrapper'], { [styles.rotate]: rotate })}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="20"
      fill="none"
      viewBox="0 0 18 20"
    >
      <path
        stroke="#3EFAED"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.988.167v18.56M1.535 11.274l7.453 7.453 7.453-7.453"
      />
    </svg>
  </div>
);

export default Arrow;
