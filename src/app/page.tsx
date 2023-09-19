/* eslint-disable no-undef */
'use client';

import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { type MouseEvent, RefObject, useRef } from 'react';

import { Layout } from '@/components/layout';
import { ProjectTile } from '@/components/project-tile';
import { Sidebar } from '@/components/sidebar';

import projectData from '../shared/project-data.json';
import styles from './home.module.scss';

type TimeoutRef = { current: NodeJS.Timeout | null };

const mostRecentProjects = (() => {
  let recentProjects = [];
  for (let i = 0; i < 3; i++) {
    recentProjects.push(projectData[i]);
  }
  return recentProjects;
})();

function handleMouseMove(
  e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  torchRef: RefObject<HTMLDivElement>,
  timeoutRef: TimeoutRef,
) {
  if (!torchRef.current) return;
  clearTimeout(timeoutRef.current as NodeJS.Timeout);
  const torch = torchRef.current;

  const heroHalfWidth = torch.clientWidth / 4;
  const heroHalfHeight = torch.clientHeight / 4;

  const torchHalfHeight = torch.clientHeight / 2;

  const translateX = e.clientX + heroHalfWidth;
  const translateY =
    e.clientY - heroHalfHeight - torchHalfHeight - 20 + window.scrollY;

  torch.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
}

function handleMouseLeave(
  e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>,
  torchRef: RefObject<HTMLDivElement>,
  timeoutRef: TimeoutRef,
) {
  if (!torchRef.current) return;
  const torch = torchRef.current;

  timeoutRef.current = setTimeout(() => {
    torch.style.transform = `translate3d(50%, -50%, 0)`;
  }, 1500);
}

export default function Home() {
  const torchRef = useRef<HTMLDivElement>(null);
  const timeoutRef: TimeoutRef = useRef(null);

  return (
    <Layout>
      <div
        className={styles.hero}
        onMouseMove={(e) => {
          handleMouseMove(e, torchRef, timeoutRef);
        }}
        onMouseLeave={(e) => {
          handleMouseLeave(e, torchRef, timeoutRef);
        }}
      >
        <Image
          className={styles.hero__image}
          src="/michael-caley.jpg"
          alt="Michael Caley web developer on a bridge"
          width="1597"
          height="649"
          loading="eager"
          priority={true}
        />

        <div
          ref={torchRef as RefObject<HTMLDivElement>}
          className={styles.torch}
        ></div>

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
          <p className={styles['about__text']}>
            Hi! I am Michael Sherris Caley, web and software engineer. I
            originally hail from the North East of England but currently reside
            in Central London where I work as a tech lead for a large ecommerce
            company.
          </p>
          <p className={styles['about__text']}>
            I have developed a variety of projects for clients ranging from
            websites, PDF merge/download tools, custom SVG animation players,
            HTML email submission services and serverless graphQL backends.
          </p>
          <p className={styles['about__text']}>
            For fun I try to work on my{' '}
            <a target="_blank" href="https://www.youtube.com/@caleyCodeLab">
              YouTube channel
            </a>{' '}
            which is helping me to grow as a developer and a person. I can tell
            you from experience that nothing ups your game like trying to
            explain web development concepts to a camera whilst attempting to
            entertain.
          </p>
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
              priority
              lazyload="eager"
            />
          ))}
        </div>
      </div>

      <Sidebar />
    </Layout>
  );
}
