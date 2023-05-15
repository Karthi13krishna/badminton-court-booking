import React from 'react';

import spacious from '../../assets/spacious.png';
import equipments from '../../assets/equipments.png';
import family from '../../assets/family.png';

import Container from '../common/Container';
import styles from './Features.module.scss';

import court from '../../assets/court.jpg';
import children from '../../assets/children.jpg';
import shuttlecock from '../../assets/shuttlecock.jpg';

const Features = () => {
  return (
    <section>
      <div className={styles['features-container']}>
        <div className={styles['features-hook']}>
          <img className={styles.icon} src={spacious} alt="" /> Spacious
        </div>
        <div className={styles['features-hook']}>
          <img className={styles.icon} src={family} alt="" /> Family-Friendly
        </div>
        <div className={styles['features-hook']}>
          <img className={styles.icon} src={equipments} alt="" /> Well-equipped
        </div>
      </div>
      <Container>
        <header className={styles.header}>
          <h2 className={styles['features__heading']}>
            Ace Your Game with Our Top Features
          </h2>
          <p>
            See why our badminton court is the perfect place for players who
            demand the best.
          </p>
        </header>
        <article className={styles['features-section']}>
          <div className={styles['feature__content']}>
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
        </article>
        <article className={styles['features-section']}>
          <div className={styles['feature__content']}>
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
        </article>
        <article className={styles['features-section']}>
          <div className={styles['feature__content']}>
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
        </article>
      </Container>
    </section>
  );
};

export default Features;
