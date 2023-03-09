import { renderQuotes } from "../modules/render.js";

function onRouteChanged(data) {
  const hash = window.location.hash.split("/")[0];
  const authorQuote = document.querySelector("section:nth-of-type(2) q");

  console.log(hash);

  switch (hash) {
    case "#AZ":
      data.sort(function (a, b) {
        if (a.quote < b.quote) {
          return -1;
        }
        if (a.quote > b.quote) {
          return 1;
        }
        return 0;
      });

      console.log(data);
      renderQuotes(data);
      break;

    case "#author":
      const theQuote = data.find((quote) => {
        return (
          quote.author ===
          window.location.hash.split("/")[1].replaceAll("-", " ")
        );
      });

      authorQuote.textContent = theQuote.quote;

      break;
  }
}

export { onRouteChanged };
