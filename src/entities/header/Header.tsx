import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../modal/Modal';
import LoginForm from '../../widgets/loginForm/LoginForm';
import classNames from 'classnames';
import { useFetchTokenMutation } from '../../store/services/auth';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { login, logout } from '../../store/authSlice';
import styles from './Header.module.css';
import { textLogo } from '../../shared/constants/titles';

function Header() {
  const [buttonText, setButtonText] = useState("Войти");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  const [fetchToken, { isLoading, error }] = useFetchTokenMutation();

  useEffect(() => {
    if (isAuth) {
      setButtonText("Выйти");
    } else {
      setButtonText("Войти");
    }
  }, [isAuth]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await fetchToken({ username, password }).unwrap();
      localStorage.setItem("token", response.token);
      dispatch(login());
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to fetch token", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {textLogo}
      </Link>
      <div className={styles.userContainer}>
        {isAuth && (
          <div className={styles.avatarContainer}>
            <div className={styles.avatar} />
          </div>
        )}
        <button
          className={classNames(styles.button, styles.buttonSignin)}
          onClick={buttonText === "Войти" ? handleOpenModal : handleLogout}
        >
          {buttonText}
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <LoginForm onSubmit={handleLogin} onCancel={handleCloseModal} />
        {isLoading && <p>Loading...</p>}
        {(error) && <p>Error: {error.message}</p>}
      </Modal>
    </header>
  );
}

export default Header;
