import { FC } from 'react';
import Image from 'next/image';
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
        Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia
        bibendum nulla sed consectetur.
      </div>

      <div className={styles['participants-content']}>
        {PARTICIPANTS.map(
          ({ name, image, company, about, github, twitter, linkedIn }, index) => (
            <ParticipantsSingleParticipant
              key={index}
              image={image}
              name={name}
              company={company}
              about={about}
              github={github}
              twitter={twitter}
              linkedIn={linkedIn}
            />
          ),
        )}

        <div className={styles['participants-contact-us']}>
          <div className={styles['participants-contact-window-header']}>
            <div className={styles.dot} />
            <div className={styles.dot} />
            <div className={styles.dot} />
          </div>

          <div className={styles['participants-contact-content']}>
            <div className={styles['participants-contact-text']}>
              Want to speak on our event?
            </div>

            <button type="button" className="button primary">
              CONTACT US!
            </button>
            <Image className={styles['cubes-image']} src={cubes} alt="cubes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participants;
