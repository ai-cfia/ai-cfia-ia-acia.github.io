import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'LOUIS',
    Svg: require('@site/static/img/louis-icon.svg').default,
    description: (
      <>

      </>
    ),
    link: '/ai-cfia-ia-acia.github.io/docs/products/louis/introduction',
  },
  {
    title: 'NACHET',
    Svg: require('@site/static/img/nachet-icon.svg').default,
    description: (
      <>

      </>
    ),
    link: '/ai-cfia-ia-acia.github.io/docs/products/nachet/introduction',
  },
  {
    title: 'MEMBRANE',
    Svg: require('@site/static/img/membrane-icon.svg').default,
    description: (
      <>

      </>
    ),
    link: '/ai-cfia-ia-acia.github.io/docs/products/membrane/introduction',
  },
  {
    title: 'FINESSE',
    Svg: require('@site/static/img/finesse-icon.svg').default,
    description: (
      <>

      </>
    ),
    link: '/ai-cfia-ia-acia.github.io/docs/products/finesse/introduction',
  },
];

function Feature({Svg, title, description, link}) {
  return (

    <div className={clsx('col col--3')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg}  role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className='centerText'><Translate>Our Projects</Translate></h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
