import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Hero() {
  const { siteConfig = {} } = useDocusaurusContext();
  const heroImg = useBaseUrl('/img/hero-illustration.svg');
  return (
    <header className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>{siteConfig.title || 'Devtron Docs'}</h1>
          <p className={styles.subtitle}>
            Accelerate Kubernetes adoption and ship reliably — guides, tutorials and best practices for teams.
          </p>

          <div className={styles.cta}>
            <Link className={clsx('button button--primary', styles.primary)} to="/docs/installation">
              Get started — Install
            </Link>
            <Link className={clsx('button button--secondary', styles.secondary)} to="/docs/deploy-first-app">
              Deploy your first app
            </Link>
          </div>

          <nav className={styles.quickNav} aria-label="Quick links">
            <Link to="/docs/tutorials">Tutorials</Link>
            <Link to="/docs/faq">FAQ</Link>
            <Link to="/docs/troubleshooting">Troubleshooting</Link>
            <Link to="/docs/glossary">Glossary</Link>
          </nav>
        </div>

        <div className={styles.right} aria-hidden>
          <img src={heroImg} alt="Devtron illustration" className={styles.heroImg} />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Devtron Docs" description="Devtron documentation and guides">
      <main>
        <Hero />
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>What you can do with Devtron</h2>
            <p className={styles.sectionLead}>Common flows and capabilities — pick a path and follow step-by-step content.</p>

            <HomepageFeatures />
          </div>
        </section>

        <section className={styles.resources}>
          <div className={styles.resourcesInner}>
            <div className={styles.resourcesCol}>
              <h3>Help & troubleshooting</h3>
              <ul>
                <li><Link to="/docs/faq">FAQ</Link></li>
                <li><Link to="/docs/troubleshooting">Troubleshooting</Link></li>
                <li><Link to="/docs/glossary">Glossary</Link></li>
                <li><Link to="/docs/tutorials">Tutorials</Link></li>
              </ul>
            </div>

            <div className={styles.resourcesCol}>
              <h3>Get hands-on</h3>
              <ul>
                <li><Link to="/docs/deploy-first-app">Deploy your first app</Link></li>
                <li><Link to="/docs/ci-cd-workflow">CI/CD templates</Link></li>
                <li><Link to="/docs/chart-store">Publish a chart</Link></li>
                <li><Link to="/docs/manage-k8s">Cluster management</Link></li>
              </ul>
            </div>

            <div className={styles.resourcesCol}>
              <h3>Community & support</h3>
              <p>Join Slack, open an issue on GitHub or visit the product site for enterprise trials.</p>
              <div className={styles.supportBtns}>
                <a className="button" href="https://github.com/devtron-labs/devtron">GitHub</a>
                <a className="button button--secondary" href="https://join.slack.com/">Community</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
