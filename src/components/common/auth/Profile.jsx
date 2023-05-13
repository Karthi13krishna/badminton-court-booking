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
import { format } from 'date-fns';

import styles from './Profile.module.scss';
import Container from '../Container';

const Profile = () => {
  const [slotList, setSlotList] = useState([]);
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
    return (
      <p className={styles.email} key={slot.id}>
        {format(slot.timeStamp, 'PPPPp')}
      </p>
    );
  });

  return (
    <Container>
      <div className={styles.profile}>
        <p className={styles.email}>{currentUser.displayName}</p>
        <button className={styles.btn} onClick={signOutHandler}>
          Sign Out
        </button>
        {displaySlots}
      </div>
    </Container>
  );
};

export default Profile;
