import { FC } from 'react';
import Illustration1 from 'components/Common/Icons/Illustration1';
import Star from 'components/Common/Icons/Star';
import Link from 'next/link';

import styles from './InitSection.module.scss';

const InitSection: FC = () => (
  <div className={styles['init-section-wrapper']}>
    <div className={styles['init-section-text']}>
      <p>June 7th & 8th, 2023 Belgrade, Serbia</p>
      <h1>
        A gathering of compute science enthusiasts innovating in the different computing
      </h1>
      <div className={styles['buttons-wrapper']}>
        <Link
          href="https://airtable.com/appKP5HuZ0xJMaVXf/tblbpqyZuCPTwi3vq/viwORKjKXkgRrngIy?blocks=hide"
          target="_blank"
          className="button primary"
          passHref
          aria-label="Submit a Talk"
        >
          Submit a Talk
          <Star />
        </Link>
        <Link
          href="https://protocollabs.notion.site/fadc9a37763844769a13ee87234b90f8"
          target="_blank"
          className="button secondary"
          passHref
          aria-label="Get Tickets Now"
        >
          Get Tickets Now
          <Star />
        </Link>
      </div>
    </div>
    <div className={styles['init-section-illustration']}>
      <Illustration1 />
    </div>
  </div>
);

export default InitSection;
