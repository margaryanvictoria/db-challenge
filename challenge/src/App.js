import fetchProducts from "./data/MockProductApiClient";
import React, { useState, useEffect } from 'react';
import Products from "./components/Products";

function App() {
  const [inStock, setInStock] = useState(false);
  const [productList, setProductList] = useState([]);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    fetchProducts()
      .then(res => setProductList(res));

  }, []);


  const search = () => {
    //take that value, return available products based off it
    if(filter==="") return productList
    
    console.log(inStock)

    return inStock ?
      [...productList].filter(p => {
        return p.name.toLowerCase().includes(filter.toLowerCase())
      }).filter(p => {
        return p.inStock===true
      })
      : [...productList].filter(p => {
      return p.name.toLowerCase().includes(filter.toLowerCase())
    })
  }

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl">Products</h1>
      <input type="text"
        placeholder="Search products"
        value={filter}
        className="border-black border"
        onChange={e => setFilter(e.target.value)} />
      <div>
        <input type="checkbox"
          id="inStock"
          onChange={e => setInStock(e.target.checked)} />
        <label htmlFor="inStock">{" "}In stock items only.</label>
      </div>
      <Products products={search()} />
    </div>
  );
}

export default App;
