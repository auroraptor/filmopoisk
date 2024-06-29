import styles from './Filter.module.css';

type FilterProps = {
  label: string;
  options: string[];
};

function Filter({ label, options }: FilterProps) {
  return (
    <div className={styles.filter}>
      <label className={styles.label}>{label}</label>
      <select className={styles.select}>
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
