import useCoffee from "../../hooks/useCoffee";
import CardCoffee from "../CardCoffee/CardCoffee";
import styles from "./CoffeeList.module.css";
import vector from "../../assets/icons/vector.svg";
import Filter from "../Filter/Filter";

function CoffeeList() {
  const { listCoffee, loading, error, handleFilter } = useCoffee();

  if (loading) return <p className={styles.loader}>Loading...</p>;

  if (error) return <p className={styles.alert}>An error has occurred!</p>;

  if (listCoffee?.length === 0)
    return <p className={styles.alert}>⚠️ No data available! </p>;

  const coffeeList = listCoffee?.map((coffee) => (
    <CardCoffee key={coffee.id} coffee={coffee} />
  ));

  return (
    <>
      <section className={styles.coffees}>
        <img src={vector} alt="icon star" className={styles.vector} />
        <div className={styles.wrapper}>
          <h3 className={styles.title}>Our Collection</h3>
          <p className={styles.text}>
            Introducing our coffee Collection a selection of unique coffees from
            diferent roast type and origins, expertly roasted in small batches
            and shipped fresh weekly.
          </p>

          <Filter handleFilter={handleFilter} />
        </div>

        <div className={styles.listCoffee}>{coffeeList}</div>
      </section>
    </>
  );
}

export default CoffeeList;
