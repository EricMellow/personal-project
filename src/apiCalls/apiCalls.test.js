import { getLocation } from "./apiCalls";
import { firebaseKey } from "../keys";

describe('getLocation', () => {
  let address;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: [{ geometry: { location: { lat: 38.8372452, lng: -97.617204 } } }]
      })
    }));
    address = '14019 West 5th Ave, Golden, CO';
  });

  it('should call fetch with the correct argument', async () => {
    const expected = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${firebaseKey}`;

    await getLocation(address);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return the correct location info', async () => {
    const expected = { lat: 38.8372452, lng: -97.617204 };

    const result = await getLocation(address);
    expect(result).toEqual(expected);
  });
});