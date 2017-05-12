const _ = require('./underbar');

const first = function(str, n = 1) {
  return n === 1 ? str[0] : str.slice(0, n);
};

const last = function(str, n = 1) {
  return n === 1 ? str[str.length - 1] : str.slice(Math.max(0, str.length - n));
};

const removeChar = function(str, target) {
  return (_.reject(str.split(''), (value) => value === target)).join('');
};

const hasChar = function(str, target) {
  return _.some(str.split(''), (value) => value === target);
};

const isOnlyDigits = function(str) {
  return _.every(str.split(''), (value) => !isNaN(value));
};

const filterToOnlyDigits = function(str) {
  return (_.filter(str.split(''), (value) => !isNaN(parseInt(value)))).join('');
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  return _.map(obj, (value) => truncateString(value, maxLength));
};

const countChars = function(str) {
  return _.reduce(str, function(obj, char){
    if (char in obj) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
    return obj;
  }, {});
};

const dedup = function(str) {
  return (_.uniq(str)).join('');
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};