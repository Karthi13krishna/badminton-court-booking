import React from 'react';
import Container from '../common/Container';
import styles from './Hero.module.scss';
import img from '../../assets/hero.png';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Container>
        <div className={styles['hero__container']}>
          <div className={styles['hero__text']}>
            <h1 className={styles['hero__heading']}>
              Experience Badminton at its Best:{' '}
              <span>Book, Train, and Excel</span>
            </h1>
            <p className={styles['hero__subtitle']}>
              Discover our state-of-the-art badminton court facility, reserve
              your time slots hassle-free, and access professional coaching to
              elevate your game. Join us today and take your badminton journey
              to new heights.
            </p>
          </div>
          <img
            src={img}
            alt="A man and a woman standing with a badminton racket in their hand"
            className={styles['hero__img']}
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
