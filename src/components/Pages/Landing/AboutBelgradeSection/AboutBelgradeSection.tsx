import { FC } from 'react';
import Illustration2 from 'components/Common/Icons/Illustration2';

import styles from './AboutBelgradeSection.module.scss';

const AboutBelgradeSection: FC = () => (
  <div id="about-belgrade" className={styles['about-belgrade-section-wrapper']}>
    <p>
      Compute Camp is a yearly gathering of compute science enthusiasts innovating in the
      different computing paradigms, from web3, databases, cloud, virtual machines or
      pushing the frontiers of what&apos;s possible with computing.
      <br />
      <br />
      The focus of the first iteration of the event will have a particular emphasis on
      web3 as Compute Camp started from the Filecoin & IPFS community, with the objective
      to spread the knowledge.
    </p>
    <Illustration2 />
  </div>
);

export default AboutBelgradeSection;
