import React from 'react';
import MembershipCard from './MembershipCard';
import Container from '../common/Container';
import styles from './MembershipContent.module.scss';
import membership from '../../assets/membership.jpg';

const MembershipContent = () => {
  const monthlyFeatures = ['Discounts', 'Priority Booking', 'Bonus Sessions'];
  const annualFeatures = [
    'Discounts',
    'Priority Booking',
    'Bonus Sessions',
    'Early Access',
    'Exclusive Events',
  ];
  return (
    <Container>
      <div>
        <h2 className={styles.title}>Our Membership Plans.</h2>
        <p className={styles.subtext}>
          Game-changing pricing, no hidden costs. Experience badminton with
          transparent and affordable membership.
        </p>
        <div className={styles.cards}>
          <MembershipCard
            package="Monthly Subscription"
            price="10"
            features={monthlyFeatures}
          />
          <MembershipCard
            package="Annual Subscription"
            price="8"
            discount="10"
            features={annualFeatures}
          />
        </div>
      </div>
      <article className={styles.article}>
        <div>
          <h2 className={styles.heading}>
            Experience Unlimited Badminton with our Exclusive Membership
          </h2>
          <p className={styles.paragraph}>
            Ready to take your badminton game to new heights? Our exclusive
            membership offers you the incredible benefit of unlimited play
            throughout the month. Say goodbye to limited access and hello to
            endless opportunities on our state-of-the-art courts. Unlock your
            true potential and become a member today.
          </p>
        </div>
        <img
          className={styles.image}
          src={membership}
          alt="a player hitting a jump smash"
        />
      </article>
    </Container>
  );
};

export default MembershipContent;
