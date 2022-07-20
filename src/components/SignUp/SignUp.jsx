/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerUser } from '../../api';
import { Header } from '../Header';
import styles from './SignUp.module.scss';

export const SignUp = ({ accept }) => {
  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hider, setHider] = useState('password');
  const [error, setError] = useState('');
  const relocate = useNavigate();

  const handler = async () => {
    const result = await registerUser(email, password, userName);

    if (result.ok) {
      accept(true);
      relocate('/home', { replace: true });
    } else {
      setError('We already have user with this username');
    }

    setFullName('');
    setUserName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.container}>
      <Header />
      <span className={styles.title}>
        Sign Up
      </span>
      <p className={styles.error}>
        {error}
      </p>

      <form
        onSubmit={handler}
      >

        <p className={styles.input_description}>
          Full Name
        </p>
        <input
          required
          type="text"
          placeholder="Example Name"
          className={styles.input}
          value={fullName}
          onChange={event => {
            setFullName(event.target.value);
          }}
        />

        <p className={styles.input_description}>
          User Name
        </p>
        <input
          required
          type="text"
          placeholder="Example1488"
          className={styles.input}
          value={userName}
          onChange={event => {
            setUserName(event.target.value);
          }}
        />

        <p className={styles.input_description}>
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

        <p className={styles.input_description}>
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
          Sign Up
        </button>
      </form>

      <p className={styles.status}>
        I have an account.
        {' '}
        <NavLink
          to="/auth/login"
          className={styles.status__newAccount}
        >
          Go to Sign in
        </NavLink>
      </p>
    </div>
  );
};
