import React from 'react';

const About = () => {
  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f9f9f9', // Light background color for better readability
      fontFamily: 'math',
      lineHeight: '1.6',
    },
    heading: {
      textAlign: 'center',
      fontSize: '36px',
      color: '#333', // Darker color for text
      marginBottom: '20px',
    },
    section: {
      maxWidth: '800px',
      margin: '0 auto', // Center content
      textAlign: 'center',
    },
    paragraph: {
      fontSize: '18px',
      color: '#555', // Neutral text color
    },
    highlight: {
      color: '#d4af37', // Golden color for emphasizing text
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.section}>
        <p style={styles.paragraph}>
          Welcome to <span style={styles.highlight}>[OLIMP]</span>, where elegance meets craftsmanship. We are dedicated to creating timeless, exquisite pieces that celebrate individuality and beauty. 
        </p>
        <p style={styles.paragraph}>
          With years of experience in the jewelry industry, we pride ourselves on sourcing the finest materials and designing unique collections that cater to every style and occasion. From delicate everyday pieces to stunning statement designs, our mission is to bring joy and sparkle to your life.
        </p>
        <p style={styles.paragraph}>
          At <span style={styles.highlight}>[OLIMP]</span>, we believe in the art of personalization. Whether you're looking for the perfect gift or a custom design, our skilled artisans are here to bring your vision to life. 
        </p>
        <p style={styles.paragraph}>
          Thank you for choosing us to be a part of your most cherished moments. We look forward to helping you shine in your own unique way.
        </p>
      </div>
    </div>
  );
};

export default About;
