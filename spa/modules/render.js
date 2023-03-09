const daily = document.querySelector("section:first-of-type q");
const authors = document.querySelector("section#authors ul");
const quotes = document.querySelector("section#all ul");

export const authorQuote = document.querySelector("section:nth-of-type(2) q");

export function changeDaily(data) {
  daily.textContent = data[0].quote;
}

export function renderAuthors(data) {
  // loop throug data and -> forEach
  // render html for each item -> *
  // in authors -> ul / innerHTML
  data.forEach((quote) => {
    console.log(quote.author);
    let oneauthor = quote.author;
    authors.insertAdjacentHTML(
      "beforeend",
      `<li> <a href="#author/${quote.author.replaceAll(
        " ",
        "-"
      )}"> <img src="./images/person.png"> <p>${oneauthor}</p> </a> </li>`
    );
  });
  console.log(data);
}

export function standardAuthorquote(data) {
  authorQuote.textContent = data[0].quote;
  console.log(data[0].quote);
}

export function renderQuotes(data) {
  while (quotes.firstChild) {
    quotes.removeChild(quotes.lastChild);
  }

  data.forEach((quote) => {
    console.log(quote.quote);
    let onequote = quote.quote;
    quotes.insertAdjacentHTML("beforeend", `<li> <q>${onequote}</q> </li>`);
  });
}
