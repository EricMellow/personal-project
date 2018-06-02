import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, zipcode) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    zipcode
  });

export const doCreateActivity = (address, duration, lat, lng, type) => 
  db.ref('actions/').push({
    address,
    type,
    duration,
    lat,
    lng
  })

export const doGetAllActivities = () => 
  db.ref('actions/').on('value', snapshot => snapshot.val())

// export const onceGetUsers = () =>
//   db.ref('users').once('value');