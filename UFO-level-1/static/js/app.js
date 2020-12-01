// from data.js
let tableData = data;

// YOUR CODE HERE!
//  console.log(tableData);

// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Get a reference to the table body
let tbody = d3.select("tbody");

tableData.forEach((UFOs) => {
    // console.log(UFOs);
    let row = tbody.append("tr");

    Object.entries(UFOs).forEach(([key, value]) => {
        // console.log(key, value);
        let cell = row.append("td");
        cell.text(value);
    });
});

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);


// Complete the event handler function
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();


    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#datetime");

    // console.log(inputElement);

    // Get the value property of the input element
    let inputValue = inputElement.property("value");

    // console.log(inputElement);

    // console.log(inputValue);

    let filteredData = tableData.filter(ufo => ufo.datetime === inputValue);

    // console.log(filteredData);

    // // remove any children
    tbody.html("");


    if (filteredData.length === 0) {
        tbody.text(`No such UFO sightings exist`)
    }

    else {
        filteredData.forEach((UFOs) => {
            // console.log(UFOs);
            let row = tbody.append("tr");
            Object.entries(UFOs).forEach(([key, value]) => {
                // console.log(key, value);
                let cell = row.append("td");
                cell.text(value);
            });
        });
    };
};