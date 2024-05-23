import React from 'react';

const TransctionsStatistics = ({ month, total_sale, total_sold_item, total_not_sold_item }) => {
  return (
    <div>
      <h4>
        Statistics - {month}
      </h4>
      <div
        style={{ display: 'flex', margin: 'auto', justifyContent: 'center' }}
      >
        <table
          style={{
            background: '#f8df8c',
            padding: '20px 10px 20px 10px',
            borderRadius: 15,
          }}
        >
          <tbody>
            <tr>
              <th style={{ textAlign: 'left', marginLeft: '10px', fontSize: '14px', fontWeight: 'normal' }}>
                Total sale
              </th>
              <th style={{ marginLeft: '10px', fontSize: '14px', fontWeight: 'normal' }}>
                {total_sale}
              </th>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', marginLeft: '10px', fontSize: '14px', fontWeight: 'normal' }}>
                Total Sold item
              </th>
              <th style={{ marginLeft: '10px', fontSize: '14px', fontWeight: 'normal' }}>
                {total_sold_item}
              </th>
            </tr>
            <tr>
              <th style={{ textAlign: 'left', marginLeft: '10px', fontSize: '14px', fontWeight: 'normal' }}>
                Total not Sold item
              </th>
              <th style={{ marginLeft: '10px', fontSize: '14px', fontWeight: 'normal' }}>
                {total_not_sold_item}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransctionsStatistics;
