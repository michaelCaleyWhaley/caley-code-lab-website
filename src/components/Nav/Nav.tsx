import { faEthernet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import styles from './Nav.module.scss';

const links = [
  { href: '/', label: 'Home', key: '' },
  { href: '/projects', label: 'Projects', key: '' },
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

function Nav({ pageClass }: { pageClass?: string }) {
  const [navClass, setNavClass] = useState('');

  const handleScroll = useCallback(() => {
    if (window.scrollY > 10) {
      setNavClass('nav__active');
    } else if (window.scrollY <= 10) {
      setNavClass('');
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={classnames(styles['nav'], {
        [styles[navClass ?? '']]: navClass,
        [styles[pageClass ?? '']]: pageClass,
      })}
    >
      <Link href="/" title="home page" className={styles['nav__logo']}>
        <FontAwesomeIcon
          className={styles['nav__logo--icon']}
          icon={faEthernet}
        />
      </Link>
      <ul className={styles.nav__links}>
        {links.map(({ key, href, label }) => (
          <li className={styles.nav__link} key={key}>
            <Link href={href} title={label}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Nav };
