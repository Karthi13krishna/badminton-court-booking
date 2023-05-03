import React from 'react';
import Container from '../common/Container';
import styles from './Hero.module.scss';
// import heroWebp from '../../assets/hero.webp';
// import heroWebp2x from '../../assets/hero@2x.webp';
import heroPng from '../../assets/hero.png';
import heroPng2x from '../../assets/hero@2x.png';
// import waves from '../../assets/waves.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const ctaHandler = () => {
    navigate('/membership');
  };
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
            <button onClick={ctaHandler} className={styles['hero__cta']}>
              Become a Member
            </button>
          </div>
          <picture className={styles.pic}>
            {/* <source
              type="image/webp"
              srcSet={`${heroWebp} 1x, ${heroWebp2x} 2x`}
            /> */}
            <source
              type="image/png"
              srcSet={`${heroPng} 1x, ${heroPng2x} 2x`}
            />
            <img
              alt="A man and a woman standing with a badminton racket in their hand"
              className={styles['hero__img']}
            />
          </picture>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
