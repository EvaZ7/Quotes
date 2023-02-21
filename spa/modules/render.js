var daily = document.querySelector("section:first-of-type q");

var authorOne = document.querySelector("section:nth-of-type(2) p:first-of-type");
var authorTwo = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(2) a p");
var authorThree = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(3) a p");
var authorFour = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(4) a p");
var authorFive = document.querySelector("section:nth-of-type(2) ul li:nth-of-type(5) a p");

export var authorQuote = document.querySelector("section:nth-of-type(2) q");

const allQuotes = {
    quoteOne: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:first-of-type q'),
    quoteTwo: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(2) q'),
    quoteThree: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(3) q'),
    quoteFour: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(4) q'),
    quoteFive: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(5) q'),
    quoteSix: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(6) q'),
    quoteSeven: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(7) q'),
    quoteEight: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(8) q'),
    quoteNine: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:nth-of-type(9) q'),
    quoteZero: document.querySelector('section:nth-of-type(3) ul:nth-of-type(2) li:last-of-type q')
}

export function changeDaily (data){
    daily.textContent = data[0].quote;
}

export function loadAuthor (data){
    authorOne.textContent = data[1].author;
    authorTwo.textContent = data[2].author;
    authorThree.textContent = data[3].author;
    authorFour.textContent = data[4].author;
    authorFive.textContent = data[5].author;

    authorQuote.textContent = data[1].quote;
}

export function loadAll (data){
    allQuotes.quoteOne.textContent = data[1].quote;
    allQuotes.quoteTwo.textContent = data[2].quote;
    allQuotes.quoteThree.textContent = data[3].quote;
    allQuotes.quoteFour.textContent = data[4].quote;
    allQuotes.quoteFive.textContent = data[5].quote;
    allQuotes.quoteSix.textContent = data[6].quote;
    allQuotes.quoteSeven.textContent = data[7].quote;
    allQuotes.quoteEight.textContent = data[8].quote;
    allQuotes.quoteNine.textContent = data[9].quote;
    allQuotes.quoteZero.textContent = data[0].quote;
}

// export function changeTwo (data){
//     authorQuote.textContent = data[2].quote;
//     console.log('click');
// };

// export { changeDaily };