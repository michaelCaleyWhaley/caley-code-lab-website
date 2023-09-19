'use client';

import { Layout } from '@/components/layout';
import { ProjectTile } from '@/components/project-tile';
import { Sidebar } from '@/components/sidebar';

import projectData from '../../shared/project-data.json';
import styles from './projects.module.scss';

export default function Projects() {
  return (
    <Layout pageClass="nav__active">
      <div className={styles.container}>
        <h1 className={styles['projects__title']}>PROJECTS</h1>
        <h2 className={styles['projects__sub-title']}>
          Anything worth doing takes patience and hard work.
        </h2>
      </div>

      <div className={styles.container}>
        <div className={styles['projects__row']}>
          {projectData.map(
            ({ imgSrc, imgAlt, title, desc, sidebarData }, index) => {
              return (
                <ProjectTile
                  imgSrc={imgSrc}
                  imgAlt={imgAlt}
                  title={title}
                  desc={desc}
                  key={title + index}
                  sidebarData={sidebarData}
                />
              );
            },
          )}
        </div>
      </div>

      <Sidebar />
    </Layout>
  );
}
