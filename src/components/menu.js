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
];

function Menu() {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {coffeeData.map((coffee) => (
          <Coffee name={coffee.name} price={coffee.price} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
