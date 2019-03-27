import Bowman from '../src/js/Bowman';

test('create Bowman', () => {
  const received = new Bowman();
  const expected = {
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(received).toEqual(expected);
});

test('level up for Bowman', () => {
  const received = new Bowman();
  received.levelUp();
  const expected = {
    attack: 30,
    health: 100,
    defence: 30,
    level: 2,
  };
  expect(received).toEqual(expected);
});

test('level up generate error', () => {
  const received = new Bowman();
  received.health = 0;
  function levelUpping() {
    received.levelUp();
  }
  expect(levelUpping).toThrowError(new Error('нельзя повысить левел умершего'));
});
