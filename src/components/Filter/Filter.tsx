import styles from "./Filter.module.css";

interface Props {
  handleFilter: (option: string) => void;
}

const Filter = ({ handleFilter }: Props) => {
  return (
    <div className={styles.filter}>
      <button onClick={() => handleFilter("all")}>All Products</button>
      <button onClick={() => handleFilter("available")}>Available Now</button>
    </div>
  );
};

export default Filter;
