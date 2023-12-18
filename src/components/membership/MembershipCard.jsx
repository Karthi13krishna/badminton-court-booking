import React from 'react';
import styles from './MembershipCard.module.scss';

const MembershipCard = (props) => {
  return (
    <div className={styles.card}>
      <h3 className={styles['package-name']}>{props.package}</h3>
      <div className={styles['pricing-block']}>
        {props.discount && (
          <span className={styles.discount}>${props.discount}</span>
        )}
        <span className={styles.dollar}>$</span>
        <span className={styles.price}>{props.price}</span>
        <span className={styles.month}>/mo</span>
      </div>
      <ul className={styles.list}>
        {props.features.map((feature) => {
          return <li className={styles['list-item']}>{feature}</li>;
        })}
      </ul>
      <button className={styles.button}>Become a member</button>
    </div>
  );
};

export default MembershipCard;
