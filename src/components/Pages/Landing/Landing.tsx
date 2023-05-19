import { FC } from 'react';
import clsx from 'clsx';
import Header from 'components/Common/Header/Header';
import InitSection from './InitSection/InitSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import ScheduleSection from './ScheduleSection/ScheduleSection';
import Sponsors from './Sponsors/Sponsors';
import Participants from './Participants/Participants';
import AboutBelgradeSection from './AboutBelgradeSection/AboutBelgradeSection';
import { Faq } from './Faq/Faq';

import styles from './Landing.module.scss';

const Landing: FC = () => {
  return (
    <div className={clsx(styles['landing-wrapper'], 'page-wrapper')}>
      <div className={styles['grid-top']} />
      <div className={styles['grid-middle']} />
      <div className={styles['grid-bottom']} />
      <div className={styles['landing-content']}>
        <Header />
        <InitSection />
        <DescriptionSection />
        <ScheduleSection />
        <Sponsors />
        <Participants />
        <AboutBelgradeSection />
        <Faq />
      </div>
    </div>
  );
};

export default Landing;
