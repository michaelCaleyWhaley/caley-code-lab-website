import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import styles from './sidebar.module.scss';

type EventData = {
  title: string;
  paraMain: string;
  imgSrc: string;
  imgAlt: string;
  paraAlt: string;
  href: string;
  hrefTitle: string;
  hrefText: string;
};

function Sidebar() {
  const overlayRef = useRef(null);
  const [openStatus, setOpenStatus] = useState(false);
  const [sidebarContent, setSidebarContent] = useState<EventData | null>(null);

  function handleOpenEvent(event: CustomEvent<EventData>) {
    const {
      title = '',
      paraMain = '',
      imgSrc = '',
      imgAlt = '',
      paraAlt = '',
      href = '',
      hrefTitle = '',
      hrefText = '',
    } = event.detail ?? {};

    setSidebarContent({
      title,
      paraMain,
      imgSrc,
      imgAlt,
      paraAlt,
      href,
      hrefTitle,
      hrefText,
    });

    setOpenStatus(true);

    document.body.classList.add('body__lock');
  }

  function closeSideBar() {
    setOpenStatus(false);
    document.body.classList.remove('body__lock');
  }

  const sidebarClass = openStatus
    ? classnames(styles['sidebar'], styles['sidebar--open'])
    : styles['sidebar'];

  const overlayClass = openStatus
    ? classnames(styles['sidebar__overlay'], styles['sidebar__overlay--open'])
    : styles['sidebar__overlay'];

  useEffect(() => {
    document.addEventListener('open-sidebar', (e) => {
      handleOpenEvent(e as CustomEvent);
    });
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className={overlayClass}
        onClick={closeSideBar}
      ></div>
      <div className={sidebarClass}>
        <button
          aria-label="close the sidebar"
          className={styles['sidebar__close']}
          onClick={closeSideBar}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h1 className={styles['sidebar__title']}>{sidebarContent?.title}</h1>
        <p className={styles['sidebar__text']}>{sidebarContent?.paraMain}</p>
        {sidebarContent && (
          <Image
            src={sidebarContent?.imgSrc ?? ''}
            alt={sidebarContent?.imgAlt ?? ''}
            width="10"
            height="10"
            className="mb-4 w-full h-auto"
          />
        )}
        <p className={styles['sidebar__text']}>{sidebarContent?.paraAlt}</p>
        <a
          href={sidebarContent?.href}
          title={sidebarContent?.hrefTitle}
          className={styles['sidebar__link']}
          target="_blank"
        >
          {sidebarContent?.hrefText}
        </a>
      </div>
    </>
  );
}

export { Sidebar };
