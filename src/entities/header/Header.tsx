import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import LoginForm from '../../widgets/loginForm/LoginForm';
import classNames from 'classnames';
import styles from './Header.module.css';
import { textLogo } from '../../shared/constants/titles';

function Header() {
  const [buttonText, setButtonText] = useState('Войти');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = (username: string, password: string) => {
    console.log('Login:', { username, password });
    setButtonText('Выйти');
    setIsModalOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>{textLogo}</Link>
      <div className={styles.userContainer}>
        <button
          className={classNames(styles.button, styles.buttonSignin)}
          onClick={handleOpenModal}
        >
          {buttonText}
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <LoginForm onSubmit={handleLogin} onCancel={handleCloseModal} />
      </Modal>
    </header>
  );
}

export default Header;
