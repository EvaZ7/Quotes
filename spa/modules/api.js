import { changeDaily, loadAuthor } from '../modules/render.js';

function fetchData (){
    var category = 'amazing';
    const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
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
                        changeDaily(data);
                        loadAuthor(data);
                        console.log(data);
                    })
    
}

// fetchData();

export { fetchData };