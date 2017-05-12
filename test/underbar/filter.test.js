const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Nikerys',
      honorific: 'Lord of Neverwinter',
      race: 'human',
      class: 'Weapon Master',
      strength: 16,
      constitution: 12,
      dexterity: 12,
      intelligence: 8,
      wisdom: 8,
      charisma: 8
    };

    const characterInfo = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(characterInfo).toEqual([16, 12, 12, 8, 8, 8]);
  });
});