import { useState } from 'react';
import jsonData from '../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
export default function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [filter, setFilter] = useState('');
  const [check, setCheck] = useState(false)

  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar handleChange={handleChange} handleCheck={handleCheck} check={check} />
      <ProductTable products={products} filter={filter} check={check} />
    </div>
  );
}
