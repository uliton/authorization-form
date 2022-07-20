/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logIn } from '../../api';
import { Header } from '../Header';
// import eye from '../../images/eye-off.png';

import styles from './SignIn.module.scss';

export const SignIn = ({ accept }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hider, setHider] = useState('password');
  const [error, setError] = useState('');
  const relocate = useNavigate();

  const handler = async () => {
    const result = await logIn(email, password);

    if (result.ok) {
      accept(true);
      relocate('/home', { replace: true });
    } else {
      setError('Invalid username or password! Try again.');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>
        Sign In
      </h1>
      <form
        onSubmit={handler}
      >
        <p className={styles.description}>
          Email Address
        </p>
        <input
          required
          type="email"
          placeholder="example@gmail.com"
          className={styles.input}
          value={email}
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <p className={styles.description}>
          Password
        </p>
        <div className={styles.password}>
          <input
            required
            type={hider}
            placeholder="**********"
            className={styles.input}
            value={password}
            onChange={event => {
              setPassword(event.target.value);
            }}
          />

          <button
            type="button"
            className={styles.hide_button}
            onClick={() => {
              if (hider === 'password') {
                setHider('text');
              } else {
                setHider('password');
              }
            }}
          >
            {' '}
          </button>
        </div>
        <button
          type="submit"
          className={styles.button}
        >
          Sign In
        </button>
      </form>
      <p className={styles.error}>
        {error}
      </p>
      <p className={styles.status}>
        Don&apos;t have account yet?
        {' '}
        <NavLink
          to="/auth/register"
          className={styles.status__newAccount}
        >
          New Account
        </NavLink>
      </p>
    </div>
  );
};
