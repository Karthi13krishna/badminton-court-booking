// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBY6qKIIdTN5BiqU-AwPvUgMXeFsKADC4E',
  authDomain: 'badminton-court-booking-22ca0.firebaseapp.com',
  projectId: 'badminton-court-booking-22ca0',
  storageBucket: 'badminton-court-booking-22ca0.appspot.com',
  messagingSenderId: '1011513829427',
  appId: '1:1011513829427:web:2ee36ded6e92838f98db46',
  measurementId: 'G-YK3PN50NHH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
