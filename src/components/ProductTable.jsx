import ProductRow from './ProductRow';

export default function ProductTable({ products, filter, check }) {
  const filteredProducts = products.filter((product) => {
    if (check) {
      return product.inStock;
    }

    return product.name.includes(filter);
  });
  const style = {
    container: {
      margin: '0 auto',
      borderSpacing: '50px',
      width: '80%',
    },
    head: {
      background: 'gray',
    },
  };

  return (
    //  <div>
    <>
      <table style={style.container} border>
        <thead style={style.head}>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        {filteredProducts.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </table>
    </>
    //  </div>
  );
}
