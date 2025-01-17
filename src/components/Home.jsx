import CardPizza from "./CardPizza";
import Header from "./Header";
import { pizzas } from "../assets/js/pizzas";

const Home = () => {

return (
  <main>
    <Header />
   
    <div className="cardContainer">
      {pizzas.map(pizza => <CardPizza key={pizza} name={pizza.name} price={pizza.price} img={pizza.img} ingredients={pizza.ingredients} description={pizza.desc} />)}
    </div>
  </main>
);
};

export default Home;
