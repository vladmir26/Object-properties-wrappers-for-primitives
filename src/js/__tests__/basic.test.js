import {heroLife, heroLifeLevel} from '../basic';


test('Hero should be healthy', () => {
  expect(heroLife({ name: 'Маг', health: 100 })).toBe('healthy');
});

test('Hero should be wounded', () => {
  expect(heroLife({ name: 'Маг', health: 35 })).toBe('wounded');
});

test('Hero should be critical', () => {
  expect(heroLife({ name: 'Маг', health: 5 })).toBe('critical');
});

test('Sorted array heroes', () => {
  expect(heroLifeLevel([
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
])).toStrictEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
});
