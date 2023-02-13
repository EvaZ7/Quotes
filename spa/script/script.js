// variables
var daily = document.querySelector("section:first-of-type q");
var randomness = getRandomInt(11);




// logica
fetchData()




// functions
function fetchData (){
    const url = 'https://quote.api.fdnd.nl/v1/quote'

    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // iets gaan doen met de data
                        // data, h1 veranderen naar naam
                        changeHTML(data)
                        console.log(data.data);
                    })
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
// console.log(getRandomInt(11));

function changeHTML (data) {
  
        data.data.forEach( element => {
        if(element.quoteId == randomness){
            daily.textContent = element.text;
            // avatar.src = element.avatar;
            // website.href = element.website;
            console.log(element.text);
            }
        });
    
}





// function getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min) + min * 10);
//   }
  
//   console.log(getRandomArbitrary(1, 11));