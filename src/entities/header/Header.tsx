// src/entities/header/Header.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import LoginForm from "../../widgets/loginForm/LoginForm";
import classNames from "classnames";
import styles from "./Header.module.css";
import { textLogo } from "../../shared/constants/titles";
import { useFetchTokenMutation } from "../../store/services/auth";

function Header() {
  const [buttonText, setButtonText] = useState("Войти");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fetchToken, { isLoading, error }] = useFetchTokenMutation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setButtonText("Выйти");
    }
  }, []);

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
      setButtonText("Выйти");
      setIsLoggedIn(true);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Failed to fetch token", error);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    setButtonText("Войти");
    setIsLoggedIn(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        {textLogo}
      </Link>
      <div className={styles.userContainer}>
        {isLoggedIn && (
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
        {error && <p>Error: {error.message}</p>}
      </Modal>
    </header>
  );
}

export default Header;
