import { FC } from 'react';
import Image from 'next/image';
import SectionTitle from 'components/Common/SectionTitle/SectionTitle';
import LogoWeb3mine from 'components/Common/Icons/LogoWeb3mine';
import LogoPL from 'components/Common/Icons/LogoPL';
import LogoFluence from 'components/Common/Icons/LogoFluence';
import templateLogo from './logos/sponsors-template-logo.png';

import styles from './Sponsors.module.scss';

const Sponsors: FC = () => {
  return (
    <div className={styles['sponsors-wrapper']}>
      <SectionTitle title="Sponsors" />

      <div className={styles['sponsors-content']}>
        <div className={styles['sponsors-text']}>
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
          lacinia bibendum nulla sed consectetur.
        </div>

        <div className={styles['sponsors-logos']}>
          <div className={styles.logos}>
            <LogoWeb3mine />
            <LogoPL />
            <LogoFluence />
          </div>

          <div className={styles.logos}>
            <Image src={templateLogo} alt="templateLogo" />
            <Image src={templateLogo} alt="templateLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
