// src/About.js
import React from 'react';
import TopNav from '../components/layout/TopNav'
const About = () => {
    return (
        
        <div style={styles.container}>
                  <TopNav />

            <header style={styles.header}>
                <h1>About Us</h1>
            </header>
            <section style={styles.content}>
                <h2>Welcome to Our Company</h2>
                <p>
                    We are a dedicated team focused on delivering the best services for our clients. Our mission is to provide high-quality solutions and make a positive impact in the industry.
                </p>
                {/* <p>
                    Founded in 2024, we have quickly grown into a trusted name in the field. Our expertise spans various areas, including web development, design, and digital marketing.
                </p> */}
            </section>
            <footer style={styles.footer}>
                <p>© 2024 Our Company</p>
            </footer>
        </div>
    );
};

const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
     //   maxWidth: '900px',
        margin: '0 auto',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    },
    header: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    content: {
        marginBottom: '40px',
    },
    footer: {
        textAlign: 'center',
        borderTop: '1px solid #ddd',
        paddingTop: '20px',
        fontSize: '14px',
        color: '#666',
    },
};

export default About;
