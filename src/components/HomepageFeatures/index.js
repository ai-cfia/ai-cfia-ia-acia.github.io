import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: "NACHET",
    Svg: require("@site/static/img/nachet-logo-v2.svg").default,
    description: <></>,
    link: "/docs/products/nachet/introduction",
  },
  {
    title: "FINESSE",
    Svg: require("@site/static/img/finesse-logo-v2.svg").default,
    description: <></>,
    link: "/docs/products/finesse/introduction",
  },

  {
    title: "FERTISCAN",
    Svg: require("@site/static/img/fertiscan-logo-v2.svg").default,
    description: <></>,
    link: "/docs/products/fertiscan/introduction",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className={clsx("col")}>
      <div className="text--center padding-horiz--md">
        <a href={link}>
          <Svg className={styles.featureSvg} role="img" />
          <h3>{title}</h3>
          <p>{description}</p>
        </a>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className="centerText">
          <Translate>Our Products</Translate>
        </h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
