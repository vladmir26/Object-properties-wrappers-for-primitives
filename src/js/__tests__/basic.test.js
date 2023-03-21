import heroLife from '../basic';

test('Hero should be healthy', () => {
  expect(heroLife({ name: 'Маг', health: 100 })).toBe('healthy');
});

test('Hero should be wounded', () => {
  expect(heroLife({ name: 'Маг', health: 35 })).toBe('wounded');
});

test('Hero should be critical', () => {
  expect(heroLife({ name: 'Маг', health: 5 })).toBe('critical');
});
