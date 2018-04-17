// selection of button add
const addButton = document.getElementById("add-disc-bt");
// cancel submit
addButton.addEventListener("click", function(event) {
    event.preventDefault();
    //const newDisc= getNewDisc();
    addDiscLine(getNewDisc());
});

// disc object
const disc = {
    title: "",
    artist: "",
    year: "",
    type: "",
    style: "",
    rating: ""
}

// function for getting input of new disc 
function getNewDisc() {
    const newDisc= Object.create(disc);
    // get title
    newDisc.title= document.getElementById("title").value;
    // get selected artist
    let e= document.getElementById("artist");
    newDisc.artist= e.options[e.selectedIndex].text;
    // get selected year
    e= document.getElementById("year");
    newDisc.year= e.options[e.selectedIndex].text;
    // get selected type
    e= document.getElementById("type");
    newDisc.type= e.options[e.selectedIndex].text;
    // get selected style
    e= document.getElementById("style");
    newDisc.style= e.options[e.selectedIndex].text;
    // get selected rating
    e= document.getElementById("rating");
    newDisc.rating= e.options[e.selectedIndex].text;
    // return new disc
    return newDisc;
}

// function for adding a new line of disc
function addDiscLine(pDisc) {
    // get discs table
    const discTable= document.getElementById("table-discs");

    // create line
    const newLine= document.createElement("tr");

    // create 1st row (radio button) and append to line
    addRadioButtonTD(newLine);

    // create 2nd row (title) and append to line
    addTextContentTD(pDisc.title, newLine);

    // create 3rd row (artist) and append to line
    addTextContentTD(pDisc.artist, newLine);

    // create 4th row (year) and append to line
    addTextContentTD(pDisc.year, newLine);

    // create 5th row (type) and append to line
    addTextContentTD(pDisc.type, newLine);

    // create 6th row (style) and append to line
    addTextContentTD(pDisc.style, newLine);

    // create 7th row (rating) and append to line
    addTextContentTD(pDisc.rating, newLine);

    // create 8th row (action) and append to line
    addActionTD(newLine);

    // add line to table
    discTable.appendChild(newLine);

}

function addRadioButtonTD(pLine) {
    // create row
    const row1= document.createElement("td");
    // create form
    const form1= document.createElement("form");
    // create input
    const input1= document.createElement("input");
    // set input attributes
    input1.type= "radio";
    input1.name= "selectdisc";
    // append input to form
    form1.appendChild(input1);
    // append form to row
    row1.appendChild(form1);
    // append row to line
    pLine.appendChild(row1);
}

function addTextContentTD(pContent, pLine) {
    // create row
    const row1= document.createElement("td");
    // set text content of row
    row1.textContent= pContent;
    // append row to line
    pLine.appendChild(row1);
}

function addActionTD(pLine) {
    // create row
    const row1= document.createElement("td");

    // create hrefs
    const a1= document.createElement("a");
    const a2= document.createElement("a");    
    a1.textContent= "Delete";
    a2.textContent= "Update";
    a1.href= "#";
    a2.href= "#";

    // append hrefs to row
    row1.appendChild(a1);
    row1.appendChild(document.createElement("br"));
    row1.appendChild(a2);

    // append row to line
    pLine.appendChild(row1);
}
