// variables
// const mainHeading = $('h1')
var mijnNaam = document.querySelector("h1");
var bio = document.querySelector("article:nth-of-type(2) p");
var avatar = document.querySelector("article:nth-of-type(3) img");
var website = document.querySelector("article:nth-of-type(4) a:nth-of-type(2)");




// logica
fetchData()




// functions
function fetchData (){
    const url = 'https://whois.fdnd.nl/api/v1/members?first=999'

    const data = fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // iets gaan doen met de data
                        // data, h1 veranderen naar naam
                        changeHTML(data)
                    })
    
}

function changeHTML (data) {
  
        data.members.forEach( element => {
        if(element.name == "Eva"){
            mijnNaam.textContent = element.name;
            bio.textContent = element.bio.html;
            avatar.src = element.avatar;
            website.href = element.website;
            // console.log(element.website);
            }
        });
    
}

// console.log('hello world');

// var mijnNaam = document.querySelector("h1");
// var bio = document.querySelector("article:nth-of-type(2) p");
// var avatar = document.querySelector("article:nth-of-type(3) img");
// var website = document.querySelector("article:nth-of-type(4) a:nth-of-type(2)");

// var data;
// getData().then((val) => {
//     data = val;
// })

// async function getData() {
//     const response = await fetch('https://whois.fdnd.nl/api/v1/members?first=999');
//     const data = await response.json();
//     // console.log(data);

//     // var me;
//     data.members.forEach( element => {
//         if(element.name == "Eva"){
//             // me = element;
//             mijnNaam.textContent = element.name;
//             // console.log(element.bio.html);
//             bio.textContent = element.bio.html;
//             console.log(element.website);
//             avatar.src = element.avatar;
//             website.href = element.website;
//         }
//     });

//     // return me.name;
//   }