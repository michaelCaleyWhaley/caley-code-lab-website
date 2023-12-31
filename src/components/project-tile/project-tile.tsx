import Image from 'next/image';

import styles from './project-tile.module.scss';

function ProjectTile({
  imgSrc,
  imgAlt,
  title,
  desc,
  sidebarData,
  priority = false,
  lazyload = 'lazy',
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  sidebarData: {
    title: string;
    paraMain: string;
    imgSrc: string;
    imgAlt: string;
    paraAlt: string;
    href: string;
    hrefTitle: string;
    hrefText: string;
  };
  key: string;
  priority?: boolean;
  lazyload?: 'lazy' | 'eager';
}) {
  function handleOnClick() {
    var event = new CustomEvent('open-sidebar', {
      detail: sidebarData,
    });
    document.dispatchEvent(event);
  }

  return (
    <div className={styles['project-tile']} onClick={handleOnClick}>
      <Image
        className={styles['project-tile__img']}
        src={imgSrc}
        alt={imgAlt}
        width="365"
        height="235"
        loading={lazyload}
        {...(priority && { priority })}
      />
      <h1 className={styles['project-tile__title']}>{title}</h1>
      <p className={styles['project-tile__desc']}>{desc}</p>
    </div>
  );
}

export { ProjectTile };
