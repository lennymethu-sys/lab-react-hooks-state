import { useState } from "react";

const itemsData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Bread", category: "Bakery" },
  { id: 3, name: "Cheese", category: "Dairy" },
  { id: 4, name: "Apple", category: "Fruits" },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  // toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // filter items
  const filteredItems =
    category === "All"
      ? itemsData
      : itemsData.filter((item) => item.category === category);

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>

      {/* DARK MODE BUTTON */}
      <button onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* CATEGORY FILTER */}
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>

      {/* ITEMS LIST */}
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>

      {/* CART DISPLAY */}
      <h2>Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} is in your cart.
          </li>
        ))}
      </ul>
      <div style={{ marginBottom: "10px" }}></div>
    </div>
  );
}

export default App;