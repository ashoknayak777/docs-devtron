import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const categories = [
  {
    key: 'getting-started',
    title: 'Getting Started',
    desc: 'Quickstart and initial setup to get Devtron running.',
    link: '/docs/setup/getting-started/initial-setup',
    emoji: '⚡',
  },
  {
    key: 'install-devtron',
    title: 'Install Devtron',
    desc: 'All installation methods: OSS, freemium and enterprise options.',
    link: '/docs/setup/install',
    emoji: '📦',
  },
  {
    key: 'global-config',
    title: 'Global Configurations',
    desc: 'Cluster, projects, GitOps, SSO and organization-level settings.',
    link: '/docs/user-guide/global-configurations/README',
    emoji: '⚙️',
  },
  {
    key: 'usage',
    title: 'Usage',
    desc: 'Applications, CI/CD, Jobs, Resource Browser and day-to-day operations.',
    link: '/docs/user-guide/applications',
    emoji: '🚀',
  },
  {
    key: 'chart-store',
    title: 'Chart Store',
    desc: 'Publish and manage Helm charts used across teams and environments.',
    link: '/docs/user-guide/deploy-chart/README',
    emoji: '📚',
  },
  {
    key: 'security',
    title: 'Security & Integrations',
    desc: 'Security scans, policies and useful integrations (ArgoCD, Grafana, etc.).',
    link: '/docs/user-guide/security-features',
    emoji: '🔐',
  },
  {
    key: 'resources',
    title: 'Resources',
    desc: 'Glossary, upgrade guides, troubleshooting and release notes.',
    link: '/docs/reference/glossary',
    emoji: '📁',
  },
];

export default function HomepageFeatures() {
  return (
    <div className={styles.grid}>
      {categories.map((c) => (
        <article key={c.key} className={styles.card}>
          <div className={styles.header}>
            <div className={styles.emoji} aria-hidden>{c.emoji}</div>
            <h3 className={styles.title}>{c.title}</h3>
          </div>
          <p className={styles.desc}>{c.desc}</p>
          <div className={styles.actions}>
            <Link to={c.link} className={styles.cta}>Open category →</Link>
          </div>
        </article>
      ))}
    </div>
  );
}