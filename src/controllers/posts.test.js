import { get } from './posts';

const mockData = [
  {
    "id": "ig-1",
    "accountId": "IG",
    "accountIcon": "/images/ig-icon.svg",
    "accountName": "IG account",
    "accountImageInitial": "J",
    "imageUrl": "/images/social_logo.png",
    "caption": "test",
    "timestamp": 1635510651638
  },
  {
    "id": "fb-1",
    "accountId": "FB",
    "accountIcon": "/images/fb-icon.svg",
    "accountName": "FB account",
    "accountImageInitial": "J",
    "imageUrl": "/images/social_logo.png",
    "caption": "test",
    "timestamp": 1635510051638
  }
];

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve(mockData)
    })
});

describe('The posts API controller', () => {
  test('get() returns expected payload', async () => {
    const result = await get();
    expect(result).toEqual(mockData);
  });
});
