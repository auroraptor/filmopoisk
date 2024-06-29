import { useState } from 'react';
import './styles.css';

function Layout() {

  const [buttonText, setButtonText] = useState('Войти')

    return (
      <header className="header">
        <a href='#'>Фильмопоиск</a>
        <div className="userContainer">
          <button className="button buttonSignin">{buttonText}</button>
        </div>
      </header>
    )
  }
  
  export default Layout
  