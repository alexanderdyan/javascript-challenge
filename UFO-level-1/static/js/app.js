
var ufoDataSource = data;
//Get 
var tBody = d3.select("tbody");
var ufoTable = d3.select("id", "ufo-table");

//Call the table class & link to html table (**where column names are located)
var tClass = d3.select("class", "table table-striped");
ufoTable.attr("class", "table table-striped");

// Create & fill Html table in current html file.
// Takes an array of dictionary objects each representing an entry
function ClearAndFillTable(ufoData) {    
    tBody.html("");

    ufoData.forEach((currentRow) => {
        // create new row in tBody
        var tRow = tBody.append("tr");

        // iterate over every <key, value> pairs in each entry.
        // key being column name and value being the actual value for the row
        Object.entries(currentRow).forEach(([key, value]) => {
            var tCol = tRow.append("td");
            tCol.text(value);
        });

    });
};

ClearAndFillTable(ufoDataSource);

// create variable for filter button to create listener for on click.
var filterBtn = d3.select("#filter-btn");

// get access to all search filter boxes
var dateInput = d3.select("#datetime_form");
var cityInput = d3.select("#city_form");
var stateInput = d3.select("#state_form");
var countryInput = d3.select("#country_form");
var shapeInput = d3.select("#shape_form");

filterBtn.on("click", function() {
    d3.event.preventDefault(); 

    tBody.html("");

    var dateValue = dateInput.property("value");
    var cityValue = cityInput.property("value");
    var stateValue = stateInput.property("value");
    var countryValue = countryInput.property("value");
    var shapeValue = shapeInput.property("value");

    var filteredTable = ufoDataSource;
    
    if(dateValue != "")
    {
        filteredTable = filteredTable.filter(filteredTable => filteredTable.datetime === dateValue);
    }
    if(cityValue != "")
    {
        filteredTable = filteredTable.filter(filteredTable => filteredTable.city === cityValue);
    }
    if(stateValue != "")
    {
        filteredTable = filteredTable.filter(filteredTable => filteredTable.state === stateValue);
    }
    if(countryValue != "")
    {
        filteredTable = filteredTable.filter(filteredTable => filteredTable.country === countryValue);
    }
    if(shapeValue != "")
    {
        filteredTable = filteredTable.filter(filteredTable => filteredTable.shape === shapeValue);
    }    
    

    ClearAndFillTable(filteredTable);
});