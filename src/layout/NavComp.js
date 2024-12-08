import React from 'react';
import diamond from '../assests/diamonds.jpg';
import { Link } from 'react-router-dom';

// Inline styles for the Header component
const styles = {
    header: {
        backgroundColor: '#fff',
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Centers the image
        backgroundRepeat: 'no-repeat'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
    },
    logoImg: {
        height: '40px',
        marginRight: '10px',
    },
    logoText: {
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#000',
    },
    navList: {
        listStyle: 'none',
        display: 'flex',
        gap: '15px',
        margin: 0,
        padding: 0,
    },
    navLink: {
        textDecoration: 'none',
        color: '#555',
        fontWeight: 500,
    },
    navLinkHover: {
        color: '#000',
    },
    icons: {
        display: 'flex',
        gap: '15px',
    },
    iconLink: {
        color: '#555',
        fontSize: '1.2rem',
        textDecoration: 'none',
    },
};

const NavComp = () => {
    return (
        <header style={styles.header}>
            <div style={styles.container}>
                {/* Logo */}
                <div style={styles.logo}>
                    <img
                        src={diamond}
                        alt="Olimp Logo"
                        style={styles.logoImg}
                    />
                    <span style={styles.logoText}>OLIMP</span>
                </div>

                {/* Navigation Menu */}
                <nav>
                    <ul style={styles.navList}>
                        <li>
                            <Link to='home' style={styles.navLink}>Home</Link>

                        </li>
                        <li>
                            <Link to='about' style={styles.navLink}>About</Link>
                            
                        </li>
                        <li>
                        <Link to='product' style={styles.navLink}>Product</Link>
                        </li>
                        <li>
                        <Link to='contact' style={styles.navLink}>contact</Link>
                        </li>
                        
                        <li>
                        <Link to='addcomp' style={styles.navLink}>tables</Link>
                            
                        </li>
                    </ul>
                </nav>

                {/* Search and Cart Icons */}
                <div style={styles.icons}>
                    <a href="/cart" style={styles.iconLink}>
                        <i className="fas fa-shopping-cart"></i>
                    </a>
                    <a href="/search" style={styles.iconLink}>
                        <i className="fas fa-search"></i>
                    </a>
                </div>
            </div>
        </header>
    );
};

export default NavComp;
