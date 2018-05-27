import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, zipcode) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    zipcode
  });

// export const onceGetUsers = () =>
//   db.ref('users').once('value');