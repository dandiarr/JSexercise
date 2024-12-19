const listColors = document.querySelector("#list-colors");

// function to add each Color to element listColors
function addItem(item){
    // card
    const colorCard = document.createElement("section");
    colorCard.className = "card m-2 border border-1";
    listColors.append(colorCard);

    // card-body > card
    const colorCardBody = document.createElement("article");
    colorCardBody.className = "card-body";
    colorCard.append(colorCardBody);

    // card-title > cardbody
    const colorCardTitle = document.createElement("h5");
    colorCardTitle.className = "card-title";
    colorCardTitle.innerText = item.name;
    colorCardBody.append(colorCardTitle);

    // card-text > card-body
    const colorCardText = document.createElement("p");
    colorCardText.className = "card-text";
    colorCardText.innerText = item.pantone_value;
    colorCardBody.append(colorCardText);

    // color > card-body
    const colorCardColor = document.createElement("figure");
    colorCardColor.style = `background-color: ${item.color};`;
    colorCardColor.innerText = item.color;
    colorCardBody.append(colorCardColor);
}

// Asynchronous function to fetch the color list
async function fetchColorList() {

    try {

        // 1. Fetch the 1st page of data
        const response = await fetch("https://reqres.in/api/unknown");
        const result = await response.json();

        // Mutable data,, depending on the page viewed
        let colorList = result.data;
        let nextPage = result.page + 1;                           // obtain current page + 1
        let totalPages = result.total_pages;

        // 2. Use a for-loop to fetch subsequent page(s) of data
        for (let currPage = nextPage; currPage <= totalPages; currPage++) {
            const response = await fetch("https://reqres.in/api/unknown?page=" + currPage);
            const result = await response.json();

        //    result.data.forEach(color => {
        //        colorList.push(result.data);                
        //    });

        // In place of forEach, we use spread operator
        colorList = [...colorList, ...result.data];
        }

        // to reset listColors HTML element before loading colorList
        while(listColors.firstChild)
            listColors.removeChild(listColors.removeChild);

        // add each colour to be displayed in listColors (addItem)
        colorList.forEach((element) => {
            addItem(element);
        });

        // store the list of colors to localStorage
        window.localStorage.setItem("list-colors", JSON.stringify(colorList));


    } catch (error) {
        // TODO print message that no data was retrieved
        const errorHeader = document.createElement("h3");
        errorHeader.className = "fs-2 text-center text danger";
        errorHeader,innerText = "There was an error. Try reloading.";
        listColors.append(errorHeader);
    }

}

// load colors from localStorage (key: list-colors)
function loadColorsFromLocalStorage(){

    const storedColors = window.localStorage.getItem("list-colors");
    const parsedStoredColors = JSON.parse(storedColors);

    parsedStoredColors.forEach(element => {
        addItem(element)
    });
}

// when the document is loaded (DOMContentLoaded), we invoke the callback function
document.addEventListener("DOMContentLoaded", (event) => {

    const localColors = window.localStorage.getItem("list-colors");             // check if the list-colors exist in localStorage

    if(localColors){
        console.log("Load colors from localStorage");
        loadColorsFromLocalStorage();                                           // colors exist in localStorage, load from there
    }else{
        console.log("Load colors from fetch request");
        fetchColorList();                                                       // otherwise, make the api request to fetch the color remotely
    }
})


// ES6-7
// const fetchColorList = async() => {

// }