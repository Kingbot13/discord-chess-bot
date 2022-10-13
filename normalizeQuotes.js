function normalizeQuotes(str) {
  const cleanStr = str.replaceAll(/[0-9()\s]/gi, "").trim(); // remove numerical characters, parantheses, and whitespace
  const arr = cleanStr.split('"');
  arr.shift(); // important because first index in arr is an empty string
  const objArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      objArr.push({ quote: arr[i], author: arr[i + 1] });
    } else {
      continue;
    }
  }
  return objArr;
}

module.exports = normalizeQuotes;
