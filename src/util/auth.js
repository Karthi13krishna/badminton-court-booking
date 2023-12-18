import { redirect } from 'react-router-dom';
import { auth } from '../config/firebase';

export function checkAuthLoader(path) {
  const { currentUser } = auth;

  if (!currentUser) {
    return redirect('/login');
  }

  return null;
}
