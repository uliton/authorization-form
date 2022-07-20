import React from 'react';
import styles from './Header.module.scss';

export const Header = () => (
  <div className={styles.container}>
    <h2 className={styles.logo}>
      InCode
    </h2>
    <h3 className={styles.description}>
      Finance
    </h3>
  </div>
);
