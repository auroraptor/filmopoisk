import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { ButtonText } from './types';
import { textLogo } from '../../shared/constants';

function Header() {

  const [buttonText, setButtonText] = useState<ButtonText>('Войти');

    return (
      <header className="header">
        <Link to="/" className="logo">{textLogo}</Link>
        <div className="userContainer">
          <div className="avatarContainer">
            <div className="avatar"/>
          </div>
          <button className="button buttonSignin">{buttonText}</button>
        </div>
      </header>
    )
  }
  
  export default Header;
  