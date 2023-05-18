import { FC } from 'react';
import { FOOTER_SOCIALS } from 'constants/general';
import Link from 'next/link';
import Logo from '../Icons/Logo';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles['footer-wrapper']}>
      <div className={styles['footer-inner']}>
        <div>
          <Link href="/" passHref className={styles['logo-wrapper']} aria-label="Logo">
            <Logo />
          </Link>
          <p className={styles.copyright}>© web3mine ag 2023.</p>
        </div>
        <div className={styles['footer-content']}>
          <div className={styles['footer-socials']}>
            {FOOTER_SOCIALS.map(({ url, alt, Icon }) => (
              <Link key={url} href={url} target="_blank" passHref aria-label={alt}>
                <div className={styles['social-image-wrapper']}>
                  <Icon />
                </div>
              </Link>
            ))}
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <Link href="/privacy-policy" passHref>
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" passHref>
                  Terms of service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
