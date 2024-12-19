// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// Create the array to populate selectDom
const arrTopics = new Array("Methods", "Properties", "EventListerners");

// Create the array to store selected values (for submission)
let arrSelected = new Array();

// Declare constant selectDom to refer to <select> of id = "selectTopics"
const selectDom = document.getElementById("selectTopics");

// Set the attributes of selectDom
selectDom.options[0] = new Option("Please select an option", "");
selectDom.options[0].setAttribute("disabled", true);
selectDom.options[0].setAttribute("key", "option0");
// selectDom.options[1] = new Option(arrTopics[0]);
// selectDom.options[2] = new Option(arrTopics[1]);
// selectDom.options[3] = new Option(arrTopics[2]);

// For Loop Approach
for (let index = 0; index < arrTopics.length; index++) {
    selectDom.options[index + 1] = new Option(arrTopics[index], arrTopics[index]);
}

// For-each Loop Approach
arrTopics.forEach((element, key) => {
    selectDom.options[key + 1] = new Option(element, element);
    selectDom.options[key + 1].setAttribute("key", `option${key+1}`);
})

// set the ui of the selection options to use bootstrap classes
selectDom.setAttribute("multiple", true);

for (let index = 0; index < selectDom.length; index++) {
    selectDom.options.item(index).setAttribute("class", "btn btn-primary d-block m-2");
}

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options
selectDom.addEventListener("change", () => {

    // Create constant listSelected to refer to the <ul> with id "listSelected"
    const listSelected = document.getElementById("listSelected");
    
    // reset the listSelected
    resetList(listSelected);

    // Create constant collection to assign the selected items from selectDom
    const collection = selectDom.selectedOptions;

    for (let index = 0; index < collection.length; index++) {

        // get the attribute of the selected option
        const itemValue = collection[index].getAttribute("value");

        // find whether topic has been selected or not
        const found = arrSelected.find((item) => item === itemValue);

        // if itemValue is not found in arrSelected
        if(!found){
            // push the itemValue that is not selected yet to arrSelected
            arrSelected.push(itemValue);

            // append and display the selected option in listSelected
            const listItem = document.createElement("li");
            listItem.innerText = itemValue;
            listSelected.append(listItem);        
        }
    }
})

// 12. element.addEventListener()
// Adding an event listener to a button
document.getElementById("btnClearSelection").addEventListener("click", () => {
    
    const listSelected = document.getElementById("listSelected");

    // reset listSelected
    resetList(listSelected);

});

// Refactored code where resetList goes here
function resetList(listToReset){

    arrSelected = [];

    // reset the list items
    // https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
    while(listToReset.firstChild){
        listToReset.removeChild(listToReset.firstChild);
    }

};


// Clear the selection from listSelected and arrSelected
// Use the splice method to remove all elements in an array


// Challenge Statement:

// 1. Change script.js to allow only 1 selected item