import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { MENU_ITEMS } from 'constants/general';
import Link from 'next/link';
import clsx from 'clsx';
import Logo from '../Icons/Logo';

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
        <div className={styles['logo-desktop-wrapper']}>
          <Logo />
        </div>
      </Link>
      <button
        className={styles['hamburger-wrapper']}
        type="button"
        onClick={toggleMainMenuMobile}
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
          <div key={item.label} className={styles['action-bar-item']}>
            {/* {item.url ? ( */}
            {/*  <Link */}
            {/*    href={item.url} */}
            {/*    className={clsx(styles['nav-link'], { */}
            {/*      [styles.active]: pathname === item.url, */}
            {/*    })} */}
            {/*  > */}
            {/*    {item.label} */}
            {/*  </Link> */}
            {/* ) : ( */}
            {item.megaMenu && (
              <>
                <span
                  className={clsx(styles['nav-link'], {
                    [styles.active]: item.megaMenu.some((megaMenuItem) => {
                      return megaMenuItem.subItems.some(
                        (item: { label: string; url: string }) => pathname === item.url,
                      );
                    }),
                  })}
                >
                  {item.label}
                  <ChevronDown />
                </span>
                <div className={styles.megamenu}>
                  <div className={styles['megamenu-inner']}>
                    {item.megaMenu.map((column) => (
                      <div key={column.title} className={styles['megamenu-column']}>
                        <h6 className={styles.title}>{column.title}</h6>

                        <ul className={styles['submenu-inner']}>
                          {column.subItems?.map((subItem) => (
                            <li key={`${subItem.label}${subItem.url}`}>
                              <Link href={subItem.url} passHref>
                                <span
                                  className={clsx(styles['submenu-subitem'], {
                                    [styles.active]: pathname === subItem.url,
                                  })}
                                >
                                  {subItem.label}
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
        <Link href="/app" passHref>
          <div className={clsx(styles.apply, styles.secondary, 'button')}>
            <span>Go to staking app</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
