// selection of button add
const addbButton = document.querySelector("button.add-button");
// cancel submit
addbButton.addEventListener("click", function(event) {
    event.preventDefault();
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

