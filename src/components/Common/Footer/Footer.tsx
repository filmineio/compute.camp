import { FC } from 'react';
import { FOOTER_LINKS, FOOTER_SOCIALS } from 'constants/general';
import Link from 'next/link';
import Logo from '../Icons/Logo';

import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles['footer-wrapper']}>
      <div className={styles['footer-top-wrapper']}>
        <div className={styles['logo-wrapper']}>
          <Link href="/" passHref className={styles['logo-wrapper']} aria-label="Logo">
            <Logo />
          </Link>
        </div>

        <div className={styles['footer-links']}>
          {FOOTER_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.url}
              scroll={false}
              className={styles['footer-link']}
              passHref
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles['footer-socials']}>
          {FOOTER_SOCIALS.map(({ url, alt, Icon }) => (
            <Link key={url} href={url} target="_blank" passHref aria-label={alt}>
              <div className={styles['social-image-wrapper']}>
                <Icon />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles['footer-bottom-wrapper']}>
        <div className={styles['footer-bottom-content-wrapper']}>
          <div className={styles.copy}>
            © Protocol Labs | Except as noted, content licensed CC-BY 3.0
          </div>

          <div className={styles.links}>
            <Link className={styles['bottom-link']} href="" passHref>
              Terms
            </Link>

            <Link className={styles['bottom-link']} href="" passHref>
              Privacy
            </Link>

            <Link className={styles['bottom-link']} href="" passHref>
              DMCA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
