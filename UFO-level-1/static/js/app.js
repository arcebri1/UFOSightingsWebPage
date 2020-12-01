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

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function
function runEnter(){

    // Prevent the page from refreshing
    d3.event.preventDefault();

    tableData.forEach((UFOs) => {
            // console.log(UFOs);
            let row = tbody.append("tr");
            Object.entries(UFOs).forEach(([key,value]) => {
                // console.log(key, value);
                let cell = row.append("td");
                cell.text(value);
            }); 
        });





    // // Select the input element 
    // let inputElement = d3.select("#datetime");

    // // Get the value property of the input element
    // let inputValue = inputElement.property("value");

    // // console.log(inputElement);

    // console.log(inputValue);

    // let filteredData = data.filter(ufo => ufo.datetime === inputValue);

    // console.log(filteredData);

    //  // Select the table
    // let table = d3.select(".table");

    // // append to the table
    // let tr = table.append("tr");
  
    // let td = tr.append("td");

    // // let i = td.append(filteredData);
}