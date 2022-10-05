'strict';
console.log('a' > 'aac');

const arr = [1, 4, 6, 134, 13];
const arrSorted = arr.sort();

console.log(arrSorted);

arrSorted.sort(function (a, b) {
  return b - a;
});
console.log( arrSorted);


