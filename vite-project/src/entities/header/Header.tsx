import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Header.module.css';
import { ButtonText } from './header';
import { textLogo } from '../../shared/constants';

function Header() {

  const [buttonText, setButtonText] = useState<ButtonText>('Войти');

    return (
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>{textLogo}</Link>
        <div className={styles.userContainer}>
          {/* <div className={styles.userContainer}>
            <div className={styles.avatar}/>
          </div> */}
          <button className={classNames(styles.button, styles.buttonSignin)}>{buttonText}</button>
        </div>
      </header>
    )
  }
  
  export default Header;
  