// All you JavaScript code for assignment 4 should be in this file
window.onload = function(){
    makelistTable();

    document.querySelector('#menu_21').addEventListener('click', function(){
        makelistTable(1);
    });
    document.querySelector('#menu_22').addEventListener('click', function(){
        makelistTable(2);
    });
    document.querySelector('#menu_31').addEventListener('click', function(){
        makelistTable(3);
    });
    document.querySelector('#menu_32').addEventListener('click', function(){
        makelistTable(4);
    });
    document.querySelector('#menu_41').addEventListener('click', function(){
        makelistTable(5); //default in English
    });
    document.querySelector('#menu_42').addEventListener('click', function(){
        makelistTable(6, 'Arabic');
    });
    document.querySelector('#menu_43').addEventListener('click', function(){
        makelistTable(6, 'Chinese');
    });
    document.querySelector('#menu_44').addEventListener('click', function(){
        makelistTable(6, 'Franch');
    });
    document.querySelector('#menu_45').addEventListener('click', function(){
        makelistTable(6, 'Hindi');
    });
    document.querySelector('#menu_46').addEventListener('click', function(){
        makelistTable(6, 'Korean');
    });
    document.querySelector('#menu_47').addEventListener('click', function(){
        makelistTable(6, 'Japanese');
    });
    document.querySelector('#menu_48').addEventListener('click', function(){
        makelistTable(6, 'Russian');
    });
};


function makelistTable(criteria, lang = "English"){
    var table = document.querySelector('#outputTable');
    var oldTableBody = table.querySelector('tbody');
    if (oldTableBody)
    {
        oldTableBody.remove();
    }

    var tableBody = document.createElement('tbody');
    var results = countries;

    if (criteria)
    {
        switch (criteria)
        {
            case 1: //display countreies with population greater than 100Million
            results = displayTitleAndFilter('List of Countries and Dependencies - Population greater than 100 million', function(over100M) { return over100M["Population"] > 100000000 });
            break;

            case 2: //diplay countries with population between 1million and 2million
            results = displayTitleAndFilter("List of Countries and Dependencies - Population between 1 and 2 million", function(selection) { return selection["Population"] > 1000000 && selection["Population"] < 2000000});
            break;

            case 3: //display countries with Area>1000000 in Americas
            results = displayTitleAndFilter("List of Countries and Dependencies - Area greater than 1 million Km2, Americas", function(areaAmericas){ return areaAmericas["AreaInKm2"] > 1000000 && areaAmericas["Continent"] === 'Americas' });
            break;

            case 4: //display countries in Asia
            results = displayTitleAndFilter("List of Countries and Dependencies - All Countries in Asia", function(justAsia){ return justAsia["Continent"] === 'Asia'});
            break;

            case 5:
            results = displayTitleAndFilter("List of Countries and Dependencies - Country/DepName in " + lang, function(justAsia){ return justAsia["Name"]}); //default lang display

            case 6:
            results = displayTitleAndFilter("List of Countries and Dependencies - Country/DepName in " + lang , function(justAsia){ return justAsia["Name"]}); //other lang display
        }
    }


    for(var i = 0; i < results.length; i++){
        var tableRow = document.createElement('tr');
        var flagCol = document.createElement('td');
        var codeCol = document.createElement('td');
        var cNameCol = document.createElement('td');
        var contCol = document.createElement('td');
        var areaCol = document.createElement('td');
        var popCol = document.createElement('td');
        var capCol = document.createElement('td');
        

        addFlagtoTableCell(results[i].Code.toLowerCase(), flagCol);
        codeCol.appendChild(document.createTextNode(results[i].Code));
        cNameCol.appendChild(document.createTextNode(results[i].Name[lang]))
        contCol.appendChild(document.createTextNode(results[i].Continent));
        areaCol.appendChild(document.createTextNode(results[i].AreaInKm2));
        popCol.appendChild(document.createTextNode(results[i].Population))
        capCol.appendChild(document.createTextNode(results[i].Capital));


        tableRow.appendChild(flagCol);
        tableRow.appendChild(codeCol);
        tableRow.appendChild(cNameCol);
        tableRow.appendChild(contCol);
        tableRow.appendChild(areaCol);
        tableRow.appendChild(popCol);
        tableRow.appendChild(capCol);

        tableBody.appendChild(tableRow);
    }
    table.appendChild(tableBody);
}


function addFlagtoTableCell(countryID, location){
    if(countryID){
        var flag = document.createElement('img');
        flag.setAttribute('src', "flags/" + countryID + ".png");
        location.appendChild(flag);
    }
}


function displayTitleAndFilter(title, condition)
{
    document.querySelector("#subtitle").innerHTML = title;
    
    return countries.filter(condition);
}


