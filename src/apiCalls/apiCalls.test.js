import { getLocation } from "./apiCalls";
import { firebaseKey } from "../keys";

describe('getLocation', () => {
  let address;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: [{ geometry: { location: 'Lincoln, NE' } }]
      })
    }));
    address = '221 B Baker St.';
  });

  it('should call fetch with the correct argument', async () => {
    const expected = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${firebaseKey}`;

    await getLocation(address);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return the correct location info', async () => {
    const expected = 'Lincoln, NE';

    const result = getLocation(address);
    expect(result).toEqual(expected);
  });
});