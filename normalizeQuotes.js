// @ts-check

// const quotes = require('./quotes.js');
const quotes = require('./temp');

/**
  * Converts string of quotes to array of objects
  * @param {string} str
  * @returns {object[]} objArr - array of objects
*/
function normalizeQuotes(str) {
  /** @type {string} */
  const cleanStr = str.toString().replace(/[\n\r]/gi, "").trim(); // remove parantheses and newline characters
  /** @type {Array} */
  const arr = cleanStr.split(/["()]/g);
  console.log(arr.find(item => item === undefined) ? true : false);
  const objArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      objArr.push({ quote: arr[i], author: arr[i + 1]?.replace(/[0-9]/g, '').trim() });
    } else {
      continue;
    }
  }
  // objArr.map(item => console.log(item)); use this line when redirecting output to another file
  return objArr;
}

normalizeQuotes(quotes);

module.exports = normalizeQuotes;
