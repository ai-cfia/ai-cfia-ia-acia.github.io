import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner, 'backgroundImg')}>
      <div>
        <div>
          <p className="alpha">THIS WEBSITE IS IN ALPHA STAGE</p>
          <h1 className="hero__title heroTitle">{siteConfig.title}</h1>
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about">
            Learn More
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
    setShowPopup(true);
  }, []);

  return (
    <Layout
      title={`The ${siteConfig.title}`}
      description={`The Canadian Food Inspection Agency's Artificial Intelligence Laboratory`}
      >
      {showPopup && (
        <div className={styles.backdrop} onClick={() => setShowPopup(false)}>
          <div className={styles.popup} onClick={e => e.stopPropagation()}>
            <h2 className={styles.disclaimerHeading}>
              Please Note / Veuillez Noter
            </h2>
            <p className={styles.disclaimerText}>
              This site is currently in an <strong>alpha stage</strong> of development as part of a prototyping process. It has not been officially endorsed or verified. The content provided herein is subject to change and is intended solely for the purpose of obtaining feedback and facilitating discussions around the prototype. It should not be interpreted as official or definitive information.
              <br /><br />
              Ce site est actuellement en <strong>phase alpha</strong> de développement dans le cadre d'un processus de prototypage. Il n'a pas été officiellement approuvé. Le contenu fourni est susceptible de changer et est destiné uniquement à recueillir des commentaires et à faciliter les discussions autour du prototype. Il ne doit pas être interprété comme une information officielle ou définitive.
            </p>
            <button onClick={() => setShowPopup(false)}>Close / Fermer</button>
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
