import styles from './SearchInput.module.css';

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
};

function SearchInput({ placeholder = 'Название фильма', value, onChange, onClear }: SearchInputProps) {
  return (
    <div className={styles.searchInputContainer}>
      <div className={styles.icon}></div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {value && (
        <button className={styles.clearButton} onClick={onClear}>
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchInput;
