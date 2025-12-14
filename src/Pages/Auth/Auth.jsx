import { Link } from 'react-router-dom';
import styles from './Auth.module.css';

function Auth() {
  return (
    <section className={styles.auth}>
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
            <input type="email" id="email" />
          </div>

          <div className={styles.authField}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>

          {/* Sign In Button */}
          <button type="submit" className={styles.authSigninBtn}>
            Sign In
          </button>
        </form>

        {/* Terms */}
        <p className={styles.authTerms}>
          By continuing, you agree to AMAZON FAKE CLONE Conditions of Use and
          Sale. Please see our Privacy Notice, Cookies Notice, and
          Interest-Based Ads Notice.
        </p>

        {/* Create Account */}
        <button className={styles.authRegisterBtn}>
          Create your Amazon Account
        </button>
      </div>
    </section>
  );
}

export default Auth;
