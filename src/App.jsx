import { useState } from "react"
import DarkModeToggle from "./components/DarkModeToggle"
import Cart from "./components/Cart"
import ProductList from "./components/ProductList"

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [category, setCategory] = useState("All")

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const addToCart = (item) => setCart([...cart, item])

  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>Shopping App</h1>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Fruits">Fruits</option>
      </select>
      <ProductList category={category} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  )
}
export default App
