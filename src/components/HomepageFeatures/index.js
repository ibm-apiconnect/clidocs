import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get started with the CLI!',
    description: (
      <>
        How to use the API Connect command line interface
      </>
    ),
  },
  {
    title: 'Ideal for CICD',
    description: (
      <>
        Perfect for automating usage of API Connect!
      </>
    ),
  },
  {
    title: 'Reference information',
    description: (
      <>
        Every command listed with arguments
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
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
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
