import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, zipcode) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    zipcode
  });

export const doCreateActivity = (address, duration, lat, lng, type, time) => 
  db.ref('actions/').push({
    address,
    type,
    duration,
    lat,
    lng,
    time
  })

// export const onceGetUsers = () =>
//   db.ref('users').once('value');