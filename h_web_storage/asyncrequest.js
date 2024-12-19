// ES^ approach of handling promises
async function fetchData() {
    try {
        const response = await fetch("https://reqres.in/unknown");
  
        if(! response.ok)
            throw new Error(`Response not ok, status ${response.status}`);
        
        const result = await response.json();

        console.log(result.data);
    } catch (error) {
        console.log("Error", error.message);
    } 
}

fetchData();