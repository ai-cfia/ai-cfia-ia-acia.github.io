import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate, {translate} from '@docusaurus/Translate'

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div>
        <div>
          <h1 className="hero__title heroTitle"><Translate>Artificial Intelligence Lab</Translate></h1>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            <Translate>Learn More</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(false); // set to false to disable the popup
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`The Canadian Food Inspection Agency's Artificial Intelligence Laboratory`}
      >
      {showPopup && (
        <div className={styles.backdrop} onClick={() => setShowPopup(false)}>
          <div className={styles.popup} onClick={e => e.stopPropagation()}>
            <h2 className={styles.disclaimerHeading}>
            <Translate>Please Note</Translate>
            </h2>
            <p className={styles.disclaimerText}>
              <Translate>This site is currently in an</Translate> <strong><Translate>alpha stage</Translate></strong> <Translate>of development as part of a prototyping process. It has not been officially endorsed or verified. The content provided herein is subject to change and is intended solely for the purpose of obtaining feedback and facilitating discussions around the prototype. It should not be interpreted as official or definitive information.</Translate>
              </p>
            <button onClick={() => setShowPopup(false)}><Translate>Close</Translate></button>
          </div>
        </div>
      )}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
