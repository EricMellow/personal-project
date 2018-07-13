// import { firebaseKey } from "../keys";

export const getLocation = async (address) => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.FIREBASE_KEY}`);
  const location = await response.json();
  return location.results[0].geometry.location;
};