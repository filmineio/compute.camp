import { FC } from 'react';
import Illustration1 from 'components/Common/Icons/Illustration1';
import Star from 'components/Common/Icons/Star';
import Link from 'next/link';

import styles from './InitSection.module.scss';

const InitSection: FC = () => (
  <section className={styles['init-section-wrapper']}>
    <div className={styles['init-section-text']}>
      <div className={styles['date-badge']}>
        <span className={styles['badge-dot']} aria-hidden="true" />
        Coming 2025 — Belgrade, Serbia
      </div>
      <h1>
        A gathering of computing enthusiasts building the future of decentralized
        infrastructure
      </h1>
      <p className={styles['hosted-by']}>
        Hosted by Protocol Labs, Web3Mine, and Fluence
      </p>
      <div className={styles['buttons-wrapper']}>
        <Link
          href="mailto:info@compute.camp?subject=Notify%20me%20about%20Compute%20Camp%202025"
          className="button primary"
          passHref
          aria-label="Get Notified about Compute Camp 2025"
        >
          Get Notified
          <Star />
        </Link>
        <Link
          href="#schedule"
          className={styles['secondary-link']}
          passHref
          aria-label="View last year's schedule"
        >
          View last year&apos;s schedule
        </Link>
      </div>
    </div>
    <div className={styles['init-section-illustration']}>
      <Illustration1 />
    </div>
  </section>
);

export default InitSection;
