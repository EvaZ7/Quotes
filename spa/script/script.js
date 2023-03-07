
import { onRouteChanged } from '../modules/router.js'
import fetchData from '../modules/api.js'
import { changeDaily, renderAuthors, authorQuote, standardAuthorquote, renderQuotes } from '../modules/render.js';

// variables
const refreshButton = document.querySelector("section:first-of-type button");
const deNav = document.querySelector("nav");
const menuKnop = document.querySelector("header nav>a");
const allQuotes = document.querySelectorAll('li > q');

// naar module brengen
const loadingdaily = document.querySelector("section:first-of-type q");

loadingdaily.textContent = "Do you like my loading animation? I made it myself";
authorQuote.textContent = "Loading";


fetchData()
    .then(data => {
        changeDaily(data);
        renderAuthors(data);
        standardAuthorquote(data);
        renderQuotes(data);

        window.addEventListener("hashchange", e => {
            onRouteChanged(data);
        })

    }).catch((error) => {
        // Handle the error
        console.log(error);
        loadingdaily.textContent = "This should be working... but something's gone wrong";
        refreshButton.src = "images/warning.png";
        authorQuote.textContent = "Quote not found...";
    }).finally(() =>{
        // hier de loader uitzetten?
        // loadingdaily.textContent = "";
        // authorQuote.textContent = "";
    });

// eventlisteners
refreshButton.addEventListener("click", function() {
    location.reload()
}, false)

menuKnop.addEventListener("click", function() {
    deNav.classList.toggle("open");
}, false)



// functions
// function fetchData (){
//     var category = 'amazing';
//     // const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
//     const options = {
//         // method: 'GET',
//         headers: {'X-Api-Key': 'mr1axNSXq9DjWUuEBQUHGA==YK6lI63UGnsVpLyt'}
//     };

//     const data = fetch(url1, options)
//                     .then(response => response.json())
//                     .then(data => {
//                         // iets gaan doen met de data
//                         // data, h1 veranderen naar naam
//                         // changeHTML(data);
                        
//                         console.log(data);
//                         daily.textContent = data[0].quote;
//                         authorOne.textContent = data[1].author;
//                         authorQuote.textContent = data[1].quote;
//                     })
    
// }

// te gebruiken voor filters
// function onRouteChanged() {
//     const hash = window.location.hash;
//     const routerView = document.getElementById("router-view");
  
//     if (!(routerView instanceof HTMLElement)) {
//       throw new ReferenceError("No router view element available for rendering");
//     }
  
//     switch (hash) {
//       case "#AZ":
//         routerView.innerHTML = "<h2>Daily quote</h2>";
//         break;
  
//       default:
//         routerView.innerHTML = "<h2>404 - Page Not Found</h2>";
//         break;
//    }
// }

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
// // console.log(getRandomInt(11));

// function changeHTML (data) {
  
//         data.data.forEach( element => {
//         if(element.category == randomness){
//             // daily.textContent = element.text;
//             // avatar.src = element.avatar;
//             // website.href = element.website;
//             console.log(element.text);
//             }
//         });
    
// }
// var randomness = getRandomInt(11);


// function getRandomQuote(data){
//     // get ranom item from array

//     changeHTML(quote)
// }


// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min * 10);
//   }
  
//   console.log(getRandomArbitrary(1, 11));