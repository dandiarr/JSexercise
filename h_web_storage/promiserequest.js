function fetchData(){
    fetch("http://reqres.in/api/unknown")
    .then(response => {                                                         // resolve (response fetched successful)
        
        // Error handling
        if(! response.ok)
            throw new Error(`Response not ok, status ${response.status}`);

        // Otherwise resolve by returning the json response
        return response.json();                                                 // return response as JSON, to line 6
    })
    .then(result => {                                                           // resolve (data in JSON)
        console.log(result.data);                                               // log out the data
    })
    .catch(error => {                                                           // reject
        console.log(error);                                                     // log out the error
    });
}


fetchData();