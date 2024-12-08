import React from 'react';
import productImg1 from '../assests/img1.jpg'; 
import productImg2 from '../assests/img2.jpg';
import productImg3 from '../assests/img3.jpg';
import productImg4 from '../assests/img4.jpg';


const ProductComp = () => {
  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f9f9f9', // Matches About Page background
      fontFamily: 'math',
      lineHeight: '1.6',
      height: '100%', // Full height of viewport
      width: '100%', // Full width of viewport
      overflow: 'auto', // Enables scrolling if content overflows
    },
    heading: {
      textAlign: 'center',
      fontSize: '36px',
      color: '#333', // Darker color for text
      marginBottom: '20px',
    },
    productGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid
      gap: '20px',
      marginBottom: '40px',
    },
    productImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover', // Ensures images are cropped proportionally
      borderRadius: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Adds subtle shadow for aesthetics
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    tableHeader: {
      backgroundColor: '#d4af37', // Golden color for header
      color: 'white',
      padding: '10px',
      textAlign: 'left',
    },
    tableCell: {
      border: '1px solid #ccc',
      padding: '10px',
    },
  };

  // Sample product data
  const products = [
    { name: 'Gold Necklace', price: '$200', image: productImg1 },
    { name: 'Diamond Ring', price: '$500', image: productImg2 },
    { name: 'Silver Earrings', price: '$150', image: productImg3 },
    { name: 'Platinum Men Earrings', price: '$180', image: productImg4 }
   
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>

      {/* Product Images Grid */}
      <div style={styles.productGrid}>
        {products.map((product, index) => (
          <img
            key={index}
            src={product.image}
            alt={product.name}
            style={styles.productImage}
          />
        ))}
      </div>

      {/* Product Table */}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Product Name</th>
            <th style={styles.tableHeader}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{product.name}</td>
              <td style={styles.tableCell}>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductComp;
