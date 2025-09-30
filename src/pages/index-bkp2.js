import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig = {}} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.hero)}>
      <div className="container" className={styles.heroContainer}>
        <div className={styles.heroLeft}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.tagline}>{siteConfig.tagline || 'From installation to advanced GitOps workflows — opinionated guides and hands-on tutorials.'}</p>

          <div className={styles.ctaRow}>
            <Link className={clsx('button button--primary', styles.btn)} to="/docs/installation">Get started — Install</Link>
            <Link className={clsx('button button--secondary', styles.btnOutline)} to="/docs/deploy-first-app">Deploy your first app</Link>
          </div>

          <div className={styles.quickLinks}>
            <Link to="/docs/tutorials" className={styles.quickLink}>Tutorials</Link>
            <Link to="/docs/faq" className={styles.quickLink}>FAQ</Link>
            <Link to="/docs/troubleshooting" className={styles.quickLink}>Troubleshooting</Link>
            <Link to="/docs/glossary" className={styles.quickLink}>Glossary</Link>
          </div>
        </div>

        <div className={styles.heroRight} aria-hidden>
          <div className={styles.heroArt}>
            {/* Simple SVG illustration placeholder */}
            <svg width="360" height="200" viewBox="0 0 840 440" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="0" y="0" width="840" height="440" rx="20" fill="url(#g)" />
              <defs>
                <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#0ea5a4" />
                  <stop offset="1" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Devtron Docs" description="Devtron documentation site">
      <HomepageHeader />
      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What you can do with Devtron</h2>
            <p className={styles.sectionSub}>Common flows and capabilities — pick a path and follow the curated content.</p>

            <div className={styles.cardsGrid}>
              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>📦</div>
                <h3>Installation</h3>
                <p>Helm, manifests or operator: pick the install method that fits your cluster and policy.</p>
                <Link to="/docs/installation" className={styles.learn}>Learn more →</Link>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>🚀</div>
                <h3>Deploy your first app</h3>
                <p>From repo to running service in minutes — a step-by-step quickstart for engineers.</p>
                <Link to="/docs/deploy-first-app" className={styles.learn}>Start the quickstart →</Link>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>🔁</div>
                <h3>CI / CD Workflows</h3>
                <p>Build, test and release pipelines — example manifests and pipeline templates included.</p>
                <Link to="/docs/ci-cd-workflow" className={styles.learn}>See pipelines →</Link>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>🧭</div>
                <h3>Manage K8s resources</h3>
                <p>Sync, drift detection and resource views that keep your clusters predictable.</p>
                <Link to="/docs/manage-k8s" className={styles.learn}>Manage clusters →</Link>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>🩺</div>
                <h3>Auto‑remediation</h3>
                <p>Automate heal actions and incident rules to minimize manual toil.</p>
                <Link to="/docs/auto-remediation" className={styles.learn}>Automate →</Link>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>📚</div>
                <h3>Chart Store</h3>
                <p>Publish, version and share Helm charts across teams with a centralized store.</p>
                <Link to="/docs/chart-store" className={styles.learn}>Browse charts →</Link>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>💸</div>
                <h3>FinOps</h3>
                <p>Cost visibility, budgets and optimization patterns to control cloud spend.</p>
                <Link to="/docs/finops" className={styles.learn}>FinOps guide →</Link>
              </article>

              <article className={styles.featureCard}>
                <div className={styles.icon} aria-hidden>🗄️</div>
                <h3>StorageOps</h3>
                <p>Provisioning, performance tuning and snapshot best practices for stateful apps.</p>
                <Link to="/docs/storageops" className={styles.learn}>StorageOps →</Link>
              </article>
            </div>
          </div>
        </section>

        <section className={styles.deepLinksSection}>
          <div className="container">
            <div className={styles.deepLinksGrid}>
              <div>
                <h2>Help & troubleshooting</h2>
                <ul>
                  <li><Link to="/docs/faq">FAQ</Link></li>
                  <li><Link to="/docs/troubleshooting">Troubleshooting</Link></li>
                  <li><Link to="/docs/glossary">Glossary</Link></li>
                  <li><Link to="/docs/tutorials">Tutorials</Link></li>
                </ul>
              </div>

              <div>
                <h2>Get hands-on</h2>
                <ul>
                  <li><Link to="/docs/deploy-first-app">Deploy your first app</Link></li>
                  <li><Link to="/docs/ci-cd-workflow">CI/CD templates</Link></li>
                  <li><Link to="/docs/chart-store">Publish a chart</Link></li>
                  <li><Link to="/docs/manage-k8s">Cluster management</Link></li>
                </ul>
              </div>

              <div>
                <h2>Need help from the community?</h2>
                <p>Join our Slack / Discord or open an issue in GitHub for help and feature requests.</p>
                <div className={styles.supportCta}>
                  <a className="button" href="https://github.com/devtron-labs/devtron">GitHub</a>
                  <a className="button button--secondary" href="https://join.slack.com/">Community</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.siteFooter}>
          <div className="container">
            <small>© {new Date().getFullYear()} Devtron — Docs. Built with Docusaurus.</small>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
