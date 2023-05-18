import { FC } from 'react';
import clsx from 'clsx';
import Illustration1 from 'components/Common/Icons/Illustration1';
import Illustration2 from 'components/Common/Icons/Illustration2';
import ScheduleItem from './ScheduleItem/ScheduleItem';
// import Header from 'components/Common/Header/Header';
// import Footer from 'components/Common/Footer/Footer';

import styles from './Landing.module.scss';

const schedule = [
  {
    type: 'Talks',
    time: '09:00 - 9:40',
    label: 'Welcome Talk ',
    author: 'John Evens',
    title: 'Opening Ceremony and Introduce the Event.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing pulvinar dapibus leo. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
  },
];

const Landing: FC = () => {
  return (
    <div className={clsx(styles['landing-wrapper'], 'page-wrapper')}>
      <div className={styles['landing-content']}>
        {/* <Header /> */}
        <div className={styles['init-section']}>
          <div className={styles['init-section-text']}>
            <p>June 7th & 8th, 2023 Belgrade, Serbia</p>
            <h1>
              A gathering of compute science enthusiasts innovating in the different
              computing
            </h1>
            <button type="button" className="button primary">
              Submit a Talk
            </button>
            <button type="button" className="button secondary">
              Get Tickets Now
            </button>
          </div>
          <div className={styles['init-section-illustration']}>
            <Illustration1 />
          </div>
        </div>
        <div className={styles['description-section']}>
          <p>
            Compute Camp is a yearly gathering of compute science enthusiasts innovating
            in the different computing, from web3 builders, databases enthusiasts, cloud
            veterans, or folks that are pushing the frontiers of what&apos;s possible with
            computing. The focus of the first iteration of the event will have a
            particular emphasis on web3 as Compute Camp started from the Filecoin & IPFS
            community, with the objective to spread the knowledge.
          </p>
          <Illustration2 />
        </div>
        <div className={styles['schedule-section']}>
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
            {schedule.map((item) => (
              <ScheduleItem key={item.description} item={item} />
            ))}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Landing;
