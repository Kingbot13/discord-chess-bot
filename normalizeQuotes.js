/* 
    convert string to array of objects

    1. remove numerical characters
    2. add quote to object ex. {quote: "quote"}
    3. add author to quote obj ex. {quote: "quote", author: "Jim"}
    4. push obj to array
    5. return array of objects

    normalizeQuotes(str) {
        str.replaceAll(/[0-9]/, '');
        numerical characters removed
        str.split '"';
        quotes should be on even numbered indexes
        loop {
            if index === even number
                array.push({quote: index, author: index + 1})
        }
        return array
    }

*/