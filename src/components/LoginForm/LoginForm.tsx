import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import {useDispatch, useSelector} from 'react-redux';
import { AppDispatch } from '../../redux/store.tsx';
import {authAPI} from "../../api/authAPI.ts";
import {RootState} from "../../redux/store.tsx";


const LoginForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const error = useSelector((state: RootState) => state.auth.error);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(authAPI.login({ username, password }));
  };

  return (
    <div className={styles.container}>
      <form  onSubmit={handleSubmit}>
        <div className={styles.form}>
        <label className={styles.label} htmlFor="username">Email</label>
        <input
          className={styles.input}
          type="text"
          id="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <label className={styles.label} htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className={styles.button} type="submit">Sign in</button>
        {error&&<p className={styles.error}>{error}</p>}
        </div>
      </form>

    </div>
  );
}

export default LoginForm;
