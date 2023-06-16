import React from 'react';
import styles from './MembershipCard.module.scss';

const MembershipCard = () => {
  return (
    <div className={styles.card}>
      <h3 className={styles['package-name']}>Monthly package</h3>
      <div>$10</div>
      <button className={styles.button}>Become a member</button>
    </div>
  );
};

export default MembershipCard;
