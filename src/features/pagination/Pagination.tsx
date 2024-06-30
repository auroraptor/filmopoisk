import styles from './Pagination.module.css';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button className={styles.previous} onClick={handlePrevious} disabled={currentPage === 1} />
      <span>{currentPage}</span>
      <button className={styles.next} onClick={handleNext} disabled={currentPage === totalPages} />
    </div>
  );
};

export default Pagination;
