import React from 'react';

const ProductTable = ({ data }) => {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', background: '#f8df8c', borderRadius: 25 }}>
      <thead>
        <tr style={{ borderBottom: '1px solid #000' }}>
          <th style={{ padding: '8px', borderRight: '1px solid #000' }}>ID</th>
          <th style={{ padding: '8px', borderRight: '1px solid #000' }}>Title</th>
          <th style={{ padding: '8px', borderRight: '1px solid #000' }}>Description</th>
          <th style={{ padding: '8px', borderRight: '1px solid #000' }}>Price</th>
          <th style={{ padding: '8px', borderRight: '1px solid #000' }}>Category</th>
          <th style={{ padding: '8px', borderRight: '1px solid #000' }}>Sold</th>
          <th style={{ padding: '8px' }}>Image</th>
        </tr>
      </thead>
      <tbody>
        {data.map((product, index) => (
          <tr key={product.id} style={{ borderBottom: index != data.length - 1 ? '1px solid #000' : "0px" }}>
            <td style={{ padding: '8px', borderRight: '1px solid #000' }}>{product.id}</td>
            <td style={{ padding: '8px', borderRight: '1px solid #000' }}>{product.title}</td>
            <td style={{ padding: '8px', borderRight: '1px solid #000' }}>{product.description}</td>
            <td style={{ padding: '8px', borderRight: '1px solid #000' }}>{product.price}</td>
            <td style={{ padding: '8px', borderRight: '1px solid #000' }}>{product.category}</td>
            <td style={{ padding: '8px', borderRight: '1px solid #000' }}>{product.sold ? 'Yes' : 'No'}</td>
            <td style={{ padding: '8px' }}>
              <img src={product.image} alt="Product" style={{ width: '50px', height: '50px' }} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
