require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

// var words = function(str) {
//   return split(' ', str);
// };
var words = split(' ');

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

// var sentences = undefined;
var sentences = map(words);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

// var filterQs = function(xs) {
//   return filter(function(x){ return match(/q/i, x);  }, xs);
// };
var hasQ = match(/q/i);
var filterQs = filter(hasQ);

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
// var max = function(xs) {
//   return reduce(function(acc, x){
//     return _keepHighest(acc, x);
//   }, -Infinity, xs);
// };

var max = reduce(_keepHighest, -Infinity);

  
// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = curry((from, to, xs) => xs.slice(from, to));


// Bonus 2:
// ============
// Use slice to define a function "take" that returns n elements from the beginning of an array. Make it curried.
// For ['a', 'b', 'c'] with n=2 it should return ['a', 'b']
// var take = undefined;
var take = slice(0);

module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
