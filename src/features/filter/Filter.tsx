import styles from './Filter.module.css';

type FilterProps = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

function Filter({ label, options, value, onChange }: FilterProps) {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>{label}</label>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
