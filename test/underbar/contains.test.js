const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3];
    expect(_.contains(nums, 2)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3];
    expect(_.contains(nums, 5)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const NwNparty = {
      warrior: 12,
      druid: 11,
      paladin: 7,
      rogue: 9
    };
    expect(_.contains(NwNparty, 7)).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const NwNparty = {
      warrior: 12,
      druid: 11,
      paladin: 7,
      rogue: 9
    };
    expect(_.contains(NwNparty, 15)).toBe(false);
  });

});