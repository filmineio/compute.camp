import { FC } from 'react';
import Illustration2 from 'components/Common/Icons/Illustration2';

import styles from './DescriptionSection.module.scss';

const DescriptionSection: FC = () => (
  <div className={styles['description-section-wrapper']}>
    <p>
      Compute Camp is a yearly gathering of compute science enthusiasts innovating in the
      different computing, from web3 builders, databases enthusiasts, cloud veterans, or
      folks that are pushing the frontiers of what&apos;s possible with computing. The
      focus of the first iteration of the event will have a particular emphasis on web3 as
      Compute Camp started from the Filecoin & IPFS community, with the objective to
      spread the knowledge.
      <br />
      <br />
      The focus of the first iteration of the event will have a particular emphasis on
      web3 as Compute Camp started from the Filecoin & IPFS community, with the objective
      to spread the knowledge.
    </p>
    <Illustration2 />
  </div>
);

export default DescriptionSection;
