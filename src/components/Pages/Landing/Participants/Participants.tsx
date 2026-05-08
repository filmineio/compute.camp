import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PARTICIPANTS } from '../../../../constants/general';
import SectionTitle from '../../../Common/SectionTitle/SectionTitle';
import ParticipantsSingleParticipant from './ParticipantsSingleParticipant/ParticipantsSingleParticipant';
import cubes from '../../../Common/images/cubes.svg';

import styles from './Participants.module.scss';

const Participants: FC = () => {
  return (
    <div id="participants" className={styles['participants-wrapper']}>
      <SectionTitle title="Participants" />

      <div className={styles['participants-text']}>
        Get ready to gain invaluable insights from esteemed speakers representing Protocol
        Labs, Web3Mine, Fluence, and more at Compute Camp. Explore cutting-edge solutions
        in the web3 domain and be inspired by their expertise and vision.
      </div>

      <div className={styles['participants-content']}>
        {PARTICIPANTS.map((participant, index) => (
            <ParticipantsSingleParticipant
              key={index}
              image={participant.image}
              name={participant.name}
              company={participant.company}
              about={participant.about}
              github={'github' in participant ? (participant.github as string) : undefined}
              twitter={'twitter' in participant ? (participant.twitter as string) : undefined}
              linkedIn={'linkedIn' in participant ? (participant.linkedIn as string) : undefined}
            />
          ))}

        <div className={styles['participants-contact-us']}>
          <div className={styles['participants-contact-window-header']}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>

          <div className={styles['participants-contact-content']}>
            <div className={styles['participants-contact-text']}>
              Want to speak at our event?
            </div>
            <Link href="mailto:info@compute.camp" className="button primary">
              Contact Us!
            </Link>
            <Image className={styles['cubes-image']} src={cubes} alt="" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participants;
