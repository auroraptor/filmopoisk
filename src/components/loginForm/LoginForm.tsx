import styles from './LoginForm.module.css';

type LoginFormProps = {
  onSubmit: (username: string, password: string) => void;
  onCancel: () => void;
};

function LoginForm({ onSubmit, onCancel }: LoginFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const username = (form.elements.namedItem('username') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;
    onSubmit(username, password);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Авторизация</h2>
      <div className={styles.formGroup}>
        <label className={styles.label} htmlFor="username">Логин</label>
        <input className={styles.input} id="username" name="username" type="text" placeholder="Введите логин" required />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}  htmlFor="password">Пароль</label>
        <input className={styles.input} id="password" name="password" type="password" placeholder="Введите пароль" required />
      </div>
      <div className={styles.formActions}>
        <button type="submit" className={styles.submitButton}>Войти</button>
        <button type="button" className={styles.cancelButton} onClick={onCancel}>Отменить</button>
      </div>
    </form>
  );
}

export default LoginForm;
