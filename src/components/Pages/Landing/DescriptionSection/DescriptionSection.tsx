import { FC } from 'react';
import Illustration2 from 'components/Common/Icons/Illustration2';

import styles from './DescriptionSection.module.scss';

const DescriptionSection: FC = () => (
  <div className={styles['description-section-wrapper']}>
    <p>
      Compute Camp is a yearly gathering of compute science enthusiasts innovating in the
      different computing paradigms, including web3, databases, cloud, virtual machines,
      or pushing the frontiers of what&apos;s possible with computing.
      <br />
      <br />
      Springing from the momentum of the Filecoin and IPFS Communities, the focus of this
      first iteration of Compute Camp will have a strong emphasis on web3 with the main
      objective of spreading knowledge and growing the web3 community.
    </p>
    <Illustration2 />
  </div>
);

export default DescriptionSection;
