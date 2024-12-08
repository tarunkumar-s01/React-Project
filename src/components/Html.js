import React from 'react';
import bg from '../assests/img-bg.jpg'; // Ensure the path and folder name are correct

const Html = () => {
  const styles = {
    container: {
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover', // Ensures the image covers the entire area
      backgroundPosition: 'center', // Centers the image
      backgroundRepeat: 'no-repeat', // Prevents tiling
      height: '470px', // Ensures the card body has a height
      width: '100%',
      minHeight: '300px', // Set a minimum height for better appearance
      minWidth: '300px',
      display: 'flex', // Flexbox for centering content
      alignItems: 'center', // Vertically center content
      justifyContent: 'flex-end', // Horizontally align content to the right
      position: 'relative', // Positioning context for children
      padding: '20px', // Add some spacing from the edges
    },
    heading: {
      fontFamily: 'math',
      fontSize: '35px',
      color: 'white', // Changed to white
      margin: '0 0 10px 0', // Add some space below the heading
    },
    para: {
      fontFamily: 'math',
      fontSize: '15px',
      color: 'white', // Changed to white
      position: 'relative',
      right: '60px',
      margin: 0,
    },
    textContainer: {
      textAlign: 'right', // Align text to the right
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>The Best Jeweler For You</h1>
        <h6 style={styles.para}>
          Discover exquisite jewelry that combines artistry <br />and craftsmanship to celebrate your unique style.
        </h6>
      </div>
    </div>
  );
};

export default Html;
