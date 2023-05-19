import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { MENU_ITEMS } from 'constants/general';
import Link from 'next/link';
import clsx from 'clsx';
import Logo from '../Icons/Logo';
import MenuItemActive from '../Icons/MenuItemActive';

import styles from './Header.module.scss';

const Header: FC = () => {
  const { pathname } = useRouter();
  const [isMainMenuOpenMobile, setIsMainMenuOpenMobile] = useState(false);

  const toggleMainMenuMobile = () => {
    setIsMainMenuOpenMobile((prevState) => !prevState);
  };

  return (
    <div className={styles['header-wrapper']}>
      <Link href="/" passHref className={styles['logo-wrapper']} aria-label="Logo">
        <div className={styles['logo-wrapper']}>
          <Logo />
        </div>
      </Link>
      <button
        className={styles['hamburger-wrapper']}
        type="button"
        onClick={toggleMainMenuMobile}
        aria-label="toggle menu"
      >
        <div
          className={clsx(styles['hamburger-lines'], {
            [styles.open]: isMainMenuOpenMobile,
          })}
        >
          <span className={clsx(styles.line, styles.line1)} />
          <span className={clsx(styles.line, styles.line2)} />
          <span className={clsx(styles.line, styles.line3)} />
        </div>
      </button>
      <div
        className={clsx(styles['action-bar'], {
          [styles['mobile-show']]: isMainMenuOpenMobile,
        })}
      >
        {MENU_ITEMS.map((item) => (
          <div key={item.label} className={styles['nav-link-wrapper']}>
            <Link
              href={item.url}
              scroll={false}
              className={clsx(styles['nav-link'], {
                [styles.active]: pathname === item.url,
              })}
              passHref
              target={item.targetBlank ? '_blank' : '_self'}
            >
              {item.label}
              <MenuItemActive />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
