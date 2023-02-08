console.log('hello world');

var mijnNaam = document.querySelector("h1");
var bio = document.querySelector("article:nth-of-type(2) p")

var data;
getData().then((val) => {
    data = val;
})

async function getData() {
    const response = await fetch('https://whois.fdnd.nl/api/v1/members?first=999');
    const data = await response.json();
    // console.log(data);

    // var me;
    data.members.forEach( element => {
        if(element.name == "Eva"){
            // me = element;
            mijnNaam.textContent = element.name;
            // console.log(element.bio.html);
            bio.textContent = element.bio.html;
        }
    });

    // return me.name;
  }

