import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import windowsImage from '../../../../Common/images/windows.svg';
import Github from '../../../../Common/Icons/Github';
import Twitter from '../../../../Common/Icons/Twitter';
import LinkedIn from '../../../../Common/Icons/LinkedIn';

import styles from './ParticipantsSingleParticipant.module.scss';

type ParticipantProps = {
  image: string;
  name: string;
  company: string;
  about: string;
  github?: string;
  twitter?: string;
  linkedIn?: string;
};

const ParticipantsSingleParticipant: FC<ParticipantProps> = ({
  image,
  name,
  company,
  about,
  github,
  twitter,
  linkedIn,
}) => {
  return (
    <div className={styles['participants-single-participant-wrapper']}>
      <div className={styles['participants-single-participant-window-header']}>
        <div className={styles.dot} />
        <div className={styles.dot} />
        <div className={styles.dot} />
      </div>

      <div className={styles['participants-single-participant-content']}>
        <div className={styles['participants-single-participant-content-image']}>
          <Image
            className={styles['windows-image']}
            src={windowsImage}
            alt="windowsImage"
          />

          <Image
            className={styles['participant-image']}
            src={image}
            alt="participantImage"
          />
        </div>

        <div className={styles['participants-single-participant-info']}>
          <h4 className={styles['participants-single-participant-name']}>{name}</h4>

          <div className={styles['participants-single-participant-company']}>
            {company}
          </div>
          <div className={styles['participants-single-participant-about']}>{about}</div>

          {(github || twitter || linkedIn) && (
            <div className={styles['participants-single-participant-socials']}>
              {github && (
                <Link href={github} target="_blank" passHref aria-label="Github">
                  <Github />
                </Link>
              )}

              {twitter && (
                <Link href={twitter} target="_blank" passHref aria-label="Twitter">
                  <Twitter />
                </Link>
              )}

              {linkedIn && (
                <Link href={linkedIn} target="_blank" passHref aria-label="LinkedIn">
                  <LinkedIn />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticipantsSingleParticipant;
