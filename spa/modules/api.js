export default function fetchData (){
    var category = 'amazing';
    const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}&limit=10`;
    const options = {
        headers: {'X-Api-Key': 'mr1axNSXq9DjWUuEBQUHGA==YK6lI63UGnsVpLyt'}
    };

    return fetch(url1, options)
        .then(response => response.json())
    
}

