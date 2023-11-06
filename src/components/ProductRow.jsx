import { useState } from 'react';

export default function ProductRow({ product }) {
  const color = product.inStock ? 'black' : 'red';

  return (
    <tbody>
      <tr>
        <td style={{ color: color }}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    </tbody>
  );
}
