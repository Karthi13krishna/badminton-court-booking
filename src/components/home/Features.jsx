import React from 'react';
import Container from '../common/Container';
import styles from './Features.module.scss';

import court from '../../assets/court.jpg';
import children from '../../assets/children.jpg';
import shuttlecock from '../../assets/shuttlecock.jpg';

const Features = () => {
  return (
    <>
      <Container>
        <div className={styles.features}></div>
      </Container>
      <Container>
        <section className={styles['features-section']}>
          <div>
            <h3 className={styles['feature__title']}>
              State-of-the-Art Badminton Facility
            </h3>
            <p className={styles['feature__subtitle']}>
              Play like a pro on our world-class badminton courts, equipped with
              the latest technology and amenities.
            </p>
          </div>
          <img
            className={styles['feature__image']}
            alt="two rackets in a badminton court"
            src={court}
          />
        </section>
        <section className={styles['features-section']}>
          <div>
            <h3 className={styles['feature__title']}>
              Future Champions Program
            </h3>
            <p className={styles['feature__subtitle']}>
              Give your child the gift of badminton skills with our specialized
              coaching program, tailored for young players of all levels.
            </p>
          </div>
          <img
            className={styles['feature__image']}
            alt="three happy children holding a racket"
            src={children}
          />
        </section>
        <section className={styles['features-section']}>
          <div>
            <h3 className={styles['feature__title']}>
              Flexible Booking Options
            </h3>
            <p className={styles['feature__subtitle']}>
              Choose from our convenient hourly and monthly packages, designed
              to fit your schedule and budget. Book as much or as little as you
              need, whenever you need it.
            </p>
          </div>
          <img
            className={styles['feature__image']}
            alt="rackets in a badminton court"
            src={shuttlecock}
          />
        </section>
      </Container>
    </>
  );
};

export default Features;
