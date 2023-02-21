// te gebruiken voor filters
import { loadAll } from '../modules/render.js';

 function onRouteChanged(data) {
    const hash = window.location.hash;
    const routerView = document.getElementById("router-view");
    const authorQuote = document.querySelector("section:nth-of-type(2) q");
  
    if (!(routerView instanceof HTMLElement)) {
      throw new ReferenceError("No router view element available for rendering");
    }
  
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
        loadAll(data);
      break;
      
      case "#author1":
        authorQuote.textContent = data[1].quote;
        console.log('works1!');
      break;

      case "#author2":
        authorQuote.textContent = data[2].quote;
        console.log('works2!');
      break;

      case "#author3":
        authorQuote.textContent = data[3].quote;
        console.log('works3!');
      break;

      case "#author4":
        authorQuote.textContent = data[4].quote;
        console.log('works4!');
      break;

      case "#author5":
        authorQuote.textContent = data[5].quote;
        console.log('works5!');
      break;
  
      // default:
      //   authorQuote.textContent = data[1].quote;
      // break;
   }
}

// onRouteChanged();

export { onRouteChanged };