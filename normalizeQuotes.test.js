const { italic, TextInputStyle } = require('discord.js');
const {expect, test} = require('jest');
const normalizeQuotes = require('./normalizeQuotes');

describe('normalizeQuotes', ()=> {
    const quotes = '01 "quote" (jim) 02 "quote" (bob) 03"quote" (billy)';
    const cleanQuotes = [
        {
            quote: "quote",
            author: 'jim'
        },
        {
            quote: "quote",
            author: 'bob',
        },
        {
            quote: "quote",
            author: 'billy'
        }
    ];
    test('it converts string to array of objects', ()=> {
        expect(normalizeQuotes(quotes)).toBe(cleanQuotes);
    })
    
})