import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../components/DataProvider/DataProvider';
import Loader from '../../components/Loader/Loader';
import { Type } from '../../Utility/action.type';
import { auth } from '../../Utility/firebase';
import styles from './Auth.module.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState({
    signIn: false,
    signUp: false,
  });
  const { state, dispatch } = useContext(DataContext);
  const { user } = state;
  const navigate = useNavigate();
  const authHandler = async (e) => {
    e.preventDefault();
    setError('');

    if (e.target.name === 'signIn') {
      // Sign in logic
      setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER, // Set user in global state
            user: userInfo.user,
          });
          setLoading({ ...loading, signIn: false });
          navigate('/');
        })
        .catch((err) => {
          setError(err.message); // Show error message if login fails
          setLoading({ ...loading, signIn: false });
        });
    } else {
      // Sign up logic
      setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER, // Set user in global state
            user: userInfo.user,
          });
          setLoading({ ...loading, signUp: false });
          navigate('/');
        })
        .catch((err) => {
          setError(err.message); // Show error message if signup fails
          setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={styles.auth}>
      {' '}
      {/* Auth page wrapper */}
      {/* Amazon Logo */}
      <Link to="/" className={styles.authLogo}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-amazon_logo.svg.png"
          alt="Amazon Logo"
        />
      </Link>
      {/* Sign In Card */}
      <div className={styles.authContainer}>
        <h1>Sign in</h1>

        {/* Sign In Form */}
        <form>
          <div className={styles.authField}>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div className={styles.authField}>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          {error && <p className={styles.authError}>{error}</p>}{' '}
          {/* Sign In Button */}
          <button
            type="submit"
            onClick={authHandler}
            name="signIn"
            className={styles.authSigninBtn}
          >
            {loading.signIn ? <Loader /> : 'Sign In'}
          </button>
        </form>

        {/* Terms */}
        <p className={styles.authTerms}>
          By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
          Sale. Please see our Privacy Notice, Cookies Notice, and
          Interest-Based Ads Notice.
        </p>

        {/* Create Account */}
        <button
          type="button"
          onClick={authHandler}
          name="signUp"
          className={styles.authRegisterBtn}
        >
          {loading.signUp ? <Loader /> : 'Create your Amazon Account'}
        </button>
        {error && (
          <small style={{ paddingTop: '5px', color: 'red' }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth;
