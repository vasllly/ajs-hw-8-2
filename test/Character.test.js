import Character from '../src/js/Character';

test('create Character', () => {
  const received = new Character();
  const expected = {
    level: 1,
    health: 100,
  };
  expect(received).toEqual(expected);
});
