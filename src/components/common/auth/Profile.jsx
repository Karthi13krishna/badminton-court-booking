import React, { useEffect, useState } from 'react';
import { db } from '../../../config/firebase';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';

import styles from './Profile.module.scss';
import Container from '../Container';
import DisplaySlots from '../DisplaySlots';
import { BsPersonCircle } from 'react-icons/bs';
import { MoonLoader } from 'react-spinners';

const Profile = () => {
  const [slotList, setSlotList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentUser, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(
      collection(db, 'timeSlots'),
      where('uid', '==', currentUser.uid),
      orderBy('slot', 'asc')
    );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let slotArr = [];
      querySnapshot.forEach((doc) => {
        slotArr.push({
          timeStamp: doc.data().slot.seconds * 1000,
          id: doc.id,
          uid: doc.data().uid,
        });
      });
      setSlotList(slotArr);
      setLoading(false);
    });

    return unsubscribe;
  }, [currentUser.uid]);

  const signOutHandler = async () => {
    try {
      await logoutUser();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const displaySlots = slotList.map((slot) => {
    if (slot.timeStamp < new Date()) return null;
    return <DisplaySlots key={slot.id} slot={slot} />;
  });

  const bookings = loading ? (
    <div className={styles.center}>
      <MoonLoader color="#42ffad" />
    </div>
  ) : (
    <div className={styles.grid}>{displaySlots}</div>
  );

  return (
    <Container>
      <div className={styles.profile}>
        <div className={styles.account}>
          {currentUser.photoURL ? (
            <img
              className={styles.photo}
              src={currentUser.photoURL}
              alt="profile"
            />
          ) : (
            <BsPersonCircle className={styles.icon} />
          )}
          <div className={styles['account-info']}>
            <p className={styles.name}>{currentUser.displayName}</p>
            <button className={styles.btn} onClick={signOutHandler}>
              Sign Out
            </button>
          </div>
        </div>
        {displaySlots && bookings}
      </div>
    </Container>
  );
};

export default Profile;
