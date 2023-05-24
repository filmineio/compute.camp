import { FC } from 'react';
import Image from 'next/image';
import SectionTitle from 'components/Common/SectionTitle/SectionTitle';
import LogoWeb3mine from 'components/Common/Icons/LogoWeb3mine';
import LogoPL from 'components/Common/Icons/LogoPL';
import LogoFluence from 'components/Common/Icons/LogoFluence';
import LogoIPFS from 'components/Common/Icons/LogoIPFS';
import ipfsLogo from './logos/ipfs-logo.png';

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
            <LogoPL />
            <LogoWeb3mine />
            <LogoFluence />
          </div>

          <div className={styles.logos}>
            <LogoIPFS />
            <Image src={ipfsLogo} width="206" height="83" alt="templateLogo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
