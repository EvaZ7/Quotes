// te gebruiken voor filters
import { renderQuotes } from '../modules/render.js';

 function onRouteChanged(data) {
    const hash = window.location.hash.split('/')[0];
    // const routerView = document.getElementById("router-view");
    const authorQuote = document.querySelector("section:nth-of-type(2) q");
  
    // if (!(routerView instanceof HTMLElement)) {
    //   throw new ReferenceError("No router view element available for rendering");
    // }
  
  console.log(hash);

    switch (hash) {
      case "#AZ":
        data.sort(function (a, b) {
          if (a.quote < b.quote) {
            return -1;
          }
          if (a.quote> b.quote) {
            return 1;
          }
          return 0;
        });
        
        console.log(data);
        renderQuotes(data);
      break;
      
      case "#author":        
        const theQuote = data.find(quote => {
          return quote.author === window.location.hash.split('/')[1].replaceAll('-', ' ')
        })

        authorQuote.textContent = theQuote.quote

      break;
  
      // default:
      //   authorQuote.textContent = data[1].quote;
      // break;
   }
}

// onRouteChanged();

export { onRouteChanged };