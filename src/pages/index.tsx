import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import DocAreas from '@site/src/components/DocAreas';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <img
          src={useBaseUrl('/img/trama.jpg')}
          alt="Logo da Trama Partners"
          className={styles.mainLogo}
        />
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Acessar a documentação
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Documentação"
      description="Base de conhecimento interna da Trama Partners: processos, tutoriais e comparativos usados pelo time.">
      <HomepageHeader />
      <main>
        <DocAreas />
      </main>
    </Layout>
  );
}
