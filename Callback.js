function fetchData(callback) {
    let response;
    setTimeout(() => {
        response =  "Data fetched!!"; 
        response ? callback(response) : callback("Error while fetching data");
    }, 2000)
    
}

fetchData(function(data) {
    console.log(data);
})

