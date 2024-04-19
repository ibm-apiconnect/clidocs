import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Get Help!',
    description: (
      <>
        Get help on customer problems
      </>
    ),
  },
  {
    title: 'APIC Support',
    description: (
      <>
        Not to be shared with customers, for APIC L2/L3 use only!
      </>
    ),
  },
  {
    title: 'Please help us help you!',
    description: (
      <>
        Contribute back by adding more content in git!
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
