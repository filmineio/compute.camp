import { FC } from 'react';
import clsx from 'clsx';
import InitSection from './InitSection/InitSection';
import DescriptionSection from './DescriptionSection/DescriptionSection';
import ScheduleSection from './ScheduleSection/ScheduleSection';
// import Header from 'components/Common/Header/Header';
// import Footer from 'components/Common/Footer/Footer';

import styles from './Landing.module.scss';

const Landing: FC = () => {
  return (
    <div className={clsx(styles['landing-wrapper'], 'page-wrapper')}>
      <div className={styles['landing-content']}>
        {/* <Header /> */}
        <InitSection />
        <DescriptionSection />
        <ScheduleSection />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default Landing;
