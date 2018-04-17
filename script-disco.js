// selection of button add
const addbButton = document.getElementById("add-disc");
// cancel submit
addbButton.addEventListener("click", function(event) {
    event.preventDefault();
    const newDisc= getNewDisc();
    addDiscLine(newDisc);
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
    let row= document.createElement("td");

    newLine.appendChild(row);

    // create 2nd row (title) and append to line
    addTextContentTD(pDisc.title, newLine);
    /*row= document.createElement("td");
    row.textContent= pDisc.title;
    newLine.appendChild(row);*/

    // create 3rd row (artist) and append to line
    row= document.createElement("td");
    row.textContent= pDisc.artist;
    newLine.appendChild(row);

    // create 4th row (year) and append to line
    row= document.createElement("td");
    row.textContent= pDisc.year;
    newLine.appendChild(row);

    // create 5th row (type) and append to line
    row= document.createElement("td");
    row.textContent= pDisc.type;
    newLine.appendChild(row);

    // create 6th row (style) and append to line
    row= document.createElement("td");
    row.textContent= pDisc.style;
    newLine.appendChild(row);

    // create 7th row (rating) and append to line
    row= document.createElement("td");
    row.textContent= pDisc.rating;
    newLine.appendChild(row);

    // create 8th row (action) and append to line
    row= document.createElement("td");

    newLine.appendChild(row);

    // add line to table
    discTable.appendChild(newLine);

    /*
 			<tr>
				<td><form>
						<INPUT type="radio" name="selectdisc">
					</form></td>
				<td>Help!</td>
				<td>Beatles, The</td>
				<td>1965</td>
				<td>Album</td>
				<td>Pop</td>
				<td>5</td>
				<td><a href="#">Delete</a><br />
				<a href="#">Update</a></td>
			</tr>
                */
}

function addTextContentTD(pContent, pLine) {
    let row= document.createElement("td");
    row.textContent= pContent;
    pLine.appendChild(row);
}