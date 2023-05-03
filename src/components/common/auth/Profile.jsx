import React, { useEffect, useState } from 'react';
import { db } from '../../../config/firebase';
import { getDocs, collection } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
// import { format } from 'date-fns';

import styles from './Profile.module.scss';
import Container from '../Container';

const Profile = () => {
  const [slotList, setSlotList] = useState([]);
  const timeSlotCollectionRef = collection(db, 'timeSlots');
  const { currentUser, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const getSlotList = async () => {
      try {
        const data = await getDocs(timeSlotCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        // console.log(filteredData);

        if (currentUser.uid === filteredData[0].uid) {
          setSlotList((prevState) => {
            prevState.push(filteredData[0].slot.seconds * 1000);
            return prevState;
          });
          // console.log(slotList);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getSlotList();
  }, [slotList, timeSlotCollectionRef, currentUser.uid]);

  const signOutHandler = async () => {
    try {
      await logoutUser();
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <div className={styles.profile}>
        <p className={styles.email}>{currentUser.email}</p>
        <button className={styles.btn} onClick={signOutHandler}>
          Sign Out
        </button>
        {/* <p className={styles.email}>{format(slotList[2], 'PPPPp')}</p> */}
      </div>
    </Container>
  );
};

export default Profile;
