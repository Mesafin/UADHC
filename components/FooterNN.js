import React from 'react';  

const Footer = () => {  
  return (  
    <footer  style={styles.footer}>  
      <div style={styles.container}>  
        <div style={styles.logoSection}>  
          <h1 style={styles.title}>Uplifting <span style={styles.accent}>Adult</span> Day Center</h1>  
          <p style={styles.description}>  
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.  
          </p>  
          <p className='font-chunk text-4xl'>
            lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>  

        <div style={styles.linksSection}>  
          <h3>Quick Links</h3>  
          <ul style={styles.list}>  
            <li style={styles.listItem}>Home</li>  
            <li style={styles.listItem}>About Us</li>  
            <li style={styles.listItem}>Contact Us</li>  
            <li style={styles.listItem}>Career Opportunities</li>  
          </ul>  
        </div>  

        <div style={styles.policiesSection}>  
          <h3>Policies</h3>  
          <ul style={styles.list}>  
            <li style={styles.listItem}>Privacy Policy</li>  
          </ul>  
        </div>  

        <div style={styles.contactSection}>  
          <h3>Get in Touch</h3>  
          <p style={styles.contactInfo}>13th Street 47 W 13th St, New York, NY</p>  
          <p style={styles.contactInfo}>info@uadc.com</p>  
          <p style={styles.contactInfo}>+1 (626) 232 1582</p>  
          <div style={styles.icons}>  
            {/* Placeholder for social media icons */}  
            <span style={styles.icon}>📘</span>  
            <span style={styles.icon}>📸</span>  
            <span style={styles.icon}>🎥</span>  
          </div>  
          <button style={styles.button}>Make An Appointment</button>  
        </div>  
      </div>  
      <p style={styles.footerText}>© 2024 - UADC. All Rights Reserved.</p>  
    </footer>  
  );  
};  

const styles = {  
  footer: {  
    backgroundColor: '#3D4657',  
    color: '#fff',  
    padding: '20px 0',  
    textAlign: 'left',  
  },  
  container: {  
    display: 'flex',  
    justifyContent: 'space-around',  
    maxWidth: '1200px',  
    margin: 'auto',  
    padding: '0 20px',  
  },  
  logoSection: {  
    flex: 1,  
  },  
  title: {  
    fontSize: '24px',  
    margin: '0',  
  },  
  accent: {  
    color: '#e74c3c',  
  },  
  description: {  
    fontSize: '14px',  
    margin: '10px 0',  
  },  
  linksSection: {  
    flex: 1,  
  },  
  policiesSection: {  
    flex: 1,  
  },  
  contactSection: {  
    flex: 1,  
    textAlign: 'right',  
  },  
  list: {  
    listStyleType: 'none',  
    padding: 0,  
  },  
  listItem: {  
    margin: '5px 0',  
    cursor: 'pointer',  
    color: '#e74c3c',  
  },  
  contactInfo: {  
    margin: '5px 0',  
  },  
  icons: {  
    display: 'flex',  
    margin: '10px 0',  
  },  
  icon: {  
    margin: '0 5px',  
    fontSize: '20px',  
  },  
  button: {  
    backgroundColor: '#e74c3c',  
    color: '#fff',  
    border: 'none',  
    padding: '10px 20px',  
    cursor: 'pointer',  
    marginTop: '10px',  
  },  
  footerText: {  
    textAlign: 'center',  
    margin: '20px 0 0',  
  },  
};  

export default Footer;