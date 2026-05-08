import React from 'react'
import ProductCard from './ProductCard'
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
  { id: 3, name: 'Bread', price: '$1.50', category: 'Bakery', inStock: true },
  { id: 4, name: 'Cheese', price: '$3.00', category: 'Dairy', inStock: true },
]
const ProductList = ({ category, addToCart }) => {
  const filtered = category === 'All'
    ? sampleProducts
    : sampleProducts.filter(p => p.category === category)
  return (
    <div>
      <h2>Available Products</h2>
      {filtered.length === 0
        ? <p>No products available.</p>
        : filtered.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))
      }
    </div>
  )
}
export default ProductList
