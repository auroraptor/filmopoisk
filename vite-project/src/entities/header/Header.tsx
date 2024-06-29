import { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function Header() {

  const [buttonText, setButtonText] = useState('Войти')

    return (
      <header className="header">
        <Link to="/" className="logo">Фильмопоиск</Link>
        <div className="userContainer">
          <button className="button buttonSignin">{buttonText}</button>
        </div>
      </header>
    )
  }
  
  export default Header;
  