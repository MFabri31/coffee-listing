import { useEffect, useState } from "react";
import type { Coffee } from "../type";

const ENDPOINT = "/data.json";

interface State {
  coffess: Array<Coffee>;
  loading: boolean;
  error: boolean;
  filterOption: string;
}

const useCoffee = () => {
  const [coffees, setCoffees] = useState<State["coffess"]>([]);
  const [loading, setLoading] = useState<State["loading"]>(false);
  const [error, setError] = useState<State["error"]>(false);
  const [filterOption, setFilterOption] =
    useState<State["filterOption"]>("all");

  const handleFilter = (option: string): void => {
    setFilterOption(option);
  };

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(ENDPOINT);
      const data = await response.json();

      if (!response.ok) throw { title: data.title };

      setCoffees(data);
      setError(false);
    } catch (err) {
      setError(true);
      console.error("Error data fetching:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const listCoffee =
    filterOption === "all"
      ? coffees
      : coffees?.filter((coffee) => coffee.available);

  console.log(listCoffee);

  return { listCoffee, loading, error, handleFilter };
};

export default useCoffee;
