export default function fetchData (){

    var category = 'amazing';
    const url1 = `https://api.api-ninjas.com/v1/uotes?category=${category}&limit=10`;
    const options = {
        headers: {'X-Api-Key': 'mr1axNSXq9DjWUuEBQUHGA==YK6lI63UGnsVpLyt'}
    };

    return fetch(url1, options)
        .then((response) => {
            if (response.status >= 200 && response.status <= 299) {
            return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
    
}

