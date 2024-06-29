import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import LoginForm from '../../widgets/loginForm/LoginForm';
import classNames from 'classnames';
import styles from './Header.module.css';
import { textLogo } from '../../shared/constants/titles';
import { useFetchTokenMutation } from '../../store/services/auth';

function Header() {
  const [buttonText, setButtonText] = useState('Войти');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchToken, { isLoading, error }] = useFetchTokenMutation();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetchToken({ username, password }).unwrap();
      console.log('Token:', response.token);
      localStorage.setItem('token', response.token);
      setButtonText('Выйти');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to fetch token', error);
    }
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
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
      </Modal>
    </header>
  );
}

export default Header;
