import { useEffect, useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import styles from './SearchInput.module.css';

type SearchInputProps = {
  placeholder?: string;
  value?: string;
  onChange: (value: string) => void;
  onClear?: () => void;
};

function SearchInput({ placeholder = 'Название фильма', value, onChange, onClear }: SearchInputProps) {
  const [inputValue, setInputValue] = useState(value || '');

  const debouncedOnChange = useCallback(
    debounce((value: string) => onChange(value), 400),
    [onChange]
  );

  useEffect(() => {
    debouncedOnChange(inputValue);
    return () => {
      debouncedOnChange.cancel();
    };
  }, [inputValue, debouncedOnChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className={styles.searchInputContainer}>
      <div className={styles.icon}></div>
      <input
        type="text"
        className={styles.searchInput}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
      {inputValue && (
        <button className={styles.clearButton} onClick={onClear}>
          ✕
        </button>
      )}
    </div>
  );
}

export default SearchInput;
