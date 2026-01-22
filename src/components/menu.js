import Coffee from "./coffee";

let coffeeData = [
  {
    name: "Cappuchino",
    price: 4.5,
  },

  {
    name: "Adrak vali Chai",
    price: 0.5,
  },

  {
    name: "Falooda",
    price: 0.5,
  },

  {
    name: "Espresso",
    price: 3.0,
  },

  {
    name: "Latte",
    price: 4.0,
  },

  {
    name: "Mocha",
    price: 4.75,
  },

  {
    name: "Americano",
    price: 3.5,
  },

];

function Menu() {
  return (
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {coffeeData.map((coffee) => (
        <Coffee name={coffee.name} price={coffee.price} />
      ))}
    </div>
  );
}

export default Menu;
