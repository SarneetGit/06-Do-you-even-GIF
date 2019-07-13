// Global Variable Declaration //

//List of shows
var tvShows = ["Game+of+Thrones", "The+Office", "Breaking+Bad", "The+Simpsons", "Family+Guy", "Stranger+Things", "House+of+Cards", "South+Park", "Sienfeld", "Fresh+Prince+of+Belair"]


//Populate a button :)
function populateButton(tvShow) {
    let tempName = replacePlus(tvShow)
    $("#buttonHolder").append(`<button type="button" class="btn btn-secondary">${tempName}</button>`)
}

// Functions //

//This function will be used to display the show names without the +
function replacePlus(tvShow) {
    // return the show with spaces instead (Using regular expressions)
    return tvShow.replace(/\+/g, " ")
}

//Potentially use this for a start game function
for (let i in tvShows) {
    populateButton(tvShows[i])
}

// <button type="button" class="btn btn-secondary"></button>