import { useState } from 'react';

export default function SearchBar({ handleChange, handleCheck, check }) {
  const style = {
    search: {
      width: '80%',
      margin: '10px 0',
      borderRadius: '5px',
      padding: '5px',
    },
    checkbox: {
      display: 'flex',
      justifyContent: 'center',
      alignItem: 'center',
    },
  };

  return (
    <div style={style.container}>
      SearchBar
      <div>
        <input onChange={handleChange} style={style.search} type="text" />
      </div>
      <div
        style={style.checkbox}
        onClick={handleCheck}
        checked={check}
        className="check"
      >
        <input type="checkbox" />
        <label htmlFor="">only show products in stock</label>
      </div>
    </div>
  );
}
