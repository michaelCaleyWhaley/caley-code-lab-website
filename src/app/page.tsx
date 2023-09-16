'use client';

import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { Layout } from '@/components/Layout';
import { ProjectTile } from '@/components/ProjectTile';
import { Sidebar } from '@/components/Sidebar';

import styles from './home.module.scss';
import projectData from './projectData.json';

const mostRecentProjects = (() => {
  let recentProjects = [];
  for (let i = 0; i < 3; i++) {
    recentProjects.push(projectData[i]);
  }
  return recentProjects;
})();

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <Image
          className={styles.hero__image}
          src="/hero-bg.jpg"
          alt="Michael Caley web developer on a bridge"
          width="1597"
          height="649"
          loading="eager"
          priority={true}
        />

        <div className={styles.torch}></div>

        <div className={styles['hero__text-area']}>
          <p className={styles['hero__title']}>
            <span className={classnames(styles['fade'], styles['fade'])}>
              RESPONSIBLE
            </span>{' '}
            <span className={classnames(styles['fade'], styles['fade--2'])}>
              / FRIENDLY
            </span>{' '}
            <span className={classnames(styles['fade'], styles['fade--3'])}>
              / DEVELOPMENT
            </span>
          </p>
        </div>
      </div>

      <div className={styles['container']}>
        <div className={styles['container__title']}>
          <h1>About me</h1>
        </div>
        <div className={styles['about']}>
          <p className={styles['about__text']}>blah blah</p>
          <p className={styles['about__text']}>blah blah</p>
          <p className={styles['about__text']}>blah blah</p>
        </div>
      </div>

      <hr className="hr--default mb-16" />

      <div className={classnames(styles['container'], styles['projects'])}>
        <h1 className={styles['projects__title']}>Latest projects</h1>

        <p className={styles['projects__text']}>
          Below you’ll find a selection of my latest projects with links to
          their source code and/or an example. Please head over to the projects
          page to{' '}
          <Link href="/projects" title="projects page">
            see more.
          </Link>
        </p>

        <div className={styles['projects__row']}>
          {mostRecentProjects.map((project, index) => (
            <ProjectTile
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              title={project.title}
              desc={project.desc}
              sidebarData={project.sidebarData}
              key={`project-${index}`}
            />
          ))}
        </div>
      </div>

      <Sidebar />
    </Layout>
  );
}
