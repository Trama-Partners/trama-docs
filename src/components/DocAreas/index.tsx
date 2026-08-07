import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type AreaItem = {
  title: string;
  to: string;
  description: string;
  icon: ReactNode;
};

const LiveIcon = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
    <rect x="2" y="5" width="14" height="14" rx="3" />
    <path d="M16 10.5 22 7v10l-6-3.5z" />
    <circle cx="9" cy="12" r="3" />
  </svg>
);

const ChartIcon = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6" aria-hidden="true">
    <path d="M3 20h18" />
    <rect x="5" y="12" width="3.5" height="6" rx="1" />
    <rect x="10.25" y="8" width="3.5" height="10" rx="1" />
    <rect x="15.5" y="4" width="3.5" height="14" rx="1" />
  </svg>
);

const AreaList: AreaItem[] = [
  {
    title: 'TikTok Shop',
    to: '/docs/processos/tiktok',
    description:
      'Operação de lives, ferramentas de automação e comparativos entre plataformas de gestão.',
    icon: LiveIcon,
  },
  {
    title: 'Consultoria',
    to: '/docs/processos/consultoria',
    description:
      'Metodologias entregues aos clientes: diagnóstico de SEO, análise de dados e growth.',
    icon: ChartIcon,
  },
];

function Area({title, to, description, icon}: AreaItem) {
  return (
    <Link to={to} className={styles.card}>
      <span className={styles.icon}>{icon}</span>
      <Heading as="h3" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardText}>{description}</p>
      <span className={styles.cardLink}>Ver documentação →</span>
    </Link>
  );
}

export default function DocAreas(): ReactNode {
  return (
    <section className={styles.areas}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Áreas da documentação
        </Heading>
        <div className={styles.grid}>
          {AreaList.map((props) => (
            <Area key={props.to} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
