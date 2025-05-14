import Hero from "./components/Hero/Hero";
import CoffeeList from "./components/ListCoffee/CoffeeList";

function App() {
  return (
    <>
      <Hero />
      <div className="container">
        <CoffeeList />
      </div>
    </>
  );
}

export default App;
