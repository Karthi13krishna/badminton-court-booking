import React from 'react';
import styles from './About.module.scss';

const About = () => {
  const mapURL =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1797814641313!2d80.06744107567187!3d12.831656417929763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f7a7aa84415d%3A0xffe699cf602dd6c2!2sDKAYYES%20BADMINTON%20ACADEMY!5e0!3m2!1sen!2sus!4v1702950566097!5m2!1sen!2sus';
  return (
    <div className={styles.grid}>
      <h3>Contact</h3>
      <iframe
        className={styles.map}
        src={mapURL}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map"
      />
    </div>
  );
};

export default About;
