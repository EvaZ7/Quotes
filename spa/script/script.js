// variables
var daily = document.querySelector("section:first-of-type q");
var refreshButton = document.querySelector("section:first-of-type button");
var deNav = document.querySelector("nav");
var menuKnop = document.querySelector("header nav>a");
// var randomness = getRandomInt(11);




// logica
fetchData()

// eventlisteners
refreshButton.addEventListener("click", function() {
    location.reload()
}, false)

menuKnop.addEventListener("click", function() {
    deNav.classList.toggle("open");
}, false)

// functions
function fetchData (){
    var category = 'amazing';
    // const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
    const options = {
        // method: 'GET',
        headers: {'X-Api-Key': 'mr1axNSXq9DjWUuEBQUHGA==YK6lI63UGnsVpLyt'}
    };

    const data = fetch(url1, options)
                    .then(response => response.json())
                    .then(data => {
                        // iets gaan doen met de data
                        // data, h1 veranderen naar naam
                        // changeHTML(data);
                        
                        console.log(data);
                        daily.textContent = data[0].quote;
                    })
    
}

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


// function getRandomQuote(data){
//     // get ranom item from array

//     changeHTML(quote)
// }


// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min * 10);
//   }
  
//   console.log(getRandomArbitrary(1, 11));