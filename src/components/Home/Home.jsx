/* eslint-disable max-len */
import React from 'react';
import { useNavigate } from 'react-router';
import { logOut } from '../../api';
import { Header } from '../Header';
import congrat from '../../images/Congrat.png';
import someImage from '../../images/Image.png';

import styles from './Home.module.scss';

export const Home = () => {
  const relocate = useNavigate();

  const handler = () => {
    logOut();
    relocate('/', { replace: true });
  };

  return (
    <div className={styles.container}>
      <Header />
      <img src={congrat} alt="congrat" className={styles.congrats} />
      <p className={styles.description}>Now you are on the main page. Soon we will provide you with detailed feedback on the result of your work</p>
      <button
        type="button"
        className={styles.button}
        onClick={handler}
      >
        See You
      </button>
      <img src={someImage} alt="" className={styles.image} />
    </div>
  );
};
