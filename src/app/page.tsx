'use client';

import Image from 'next/image';

import { Layout } from '@/components/Layout';

// import classnames from 'classnames';
// import Link from 'next/link';
// import { FormExample } from '@/components/FormExample';
// import { Nav } from '@/components/Nav';
// import { useMemberAccess } from '@/hooks/useMemberAccess';
// import { SvgMailBox } from '../svg/Mailbox';
import styles from './home.module.scss';

export default function Home() {
  return (
    <Layout>
      <div className={styles.hero}>
        <Image
          src="/hero-bg.jpg"
          alt="Michael Caley web developer on a bridge"
          width="1597"
          height="649"
          loading="eager"
          priority={true}
        />

        <div className={styles.torch}></div>
      </div>
    </Layout>
  );
}
