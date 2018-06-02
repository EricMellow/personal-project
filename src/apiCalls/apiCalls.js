import { firebaseKey } from "./keys";

export const getLocation = async (address) => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${firebaseKey}`);
  const location = await response.json();
  return location.results[0].geometry.location;
}