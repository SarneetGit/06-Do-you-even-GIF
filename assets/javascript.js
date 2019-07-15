// Global Variable Declaration //

//List of shows
var tvShows = ["Game+of+Thrones", "The+Office", "Breaking+Bad", "The+Simpsons", "Family+Guy", "Stranger+Things", "House+of+Cards", "South+Park", "Suits", "Fresh+Prince+of+Belair"]


// Functions //

//Populate a button :)
function populateButton(tvShow) {
    let tempName = replacePlus(tvShow)
    $("#buttonHolder").append(`<button type="button" class="btn btn-secondary gifButton" name="${tempName}">${tempName}</button>`)
}

//This function will be used to display the show names without the +
function replacePlus(tvShow) {
    // return the show with spaces instead (Using regular expressions)
    return tvShow.replace(/\+/g, " ")
}

//Return Space
function replaceSpace(tvShow) {
    // return the show with + instead (Using regular expressions)
    return tvShow.replace(/ /g, "+")
}

function gifClick() {
    $(".card-img-top").on("click", function () {
        if ($(this).attr("state") === "still") {
            $(this).attr("src", $(this).attr("dataAnimate"))
            $(this).attr("state", "animate")
        }

        else if ($(this).attr("state") === "animate") {
            $(this).attr("src", $(this).attr("dataStill"))
            $(this).attr("state", "still")
        }
    });
}

function addButton() {
    $("#submit").on("click", function () {
        $(".gifButton").unbind();
        event.preventDefault();
        let name = $("#buttonInput").val()
        console.log(name)
        $("#buttonHolder").append(`<button type="button" class="btn btn-secondary gifButton" name="${name}">${name}</button>`)
        displayShows();
    })
}


function createButtons() {
    for (let i in tvShows) {
        populateButton(tvShows[i]);
    }
}

function generateInputbar() {
    $("#gifHolder1").append(`<div class="col-auto mr-auto"></div>`)
    $("#gifHolder1").append(`<div class="col-auto">   
                                <form>
                                    <div class="form-group">
                                        <label for="gifButton"><b>Create a GIF Button!</b></label>
                                        <input type="input" class="form-control" id="buttonInput" aria-describedby="emailHelp" placeholder="Enter your GIF button">
                                    </div>
                                    <button type="submit" class="btn btn-primary" id="submit">Submit</button>
                                </form>
                            </div>`)
}

function displayShows() {
    $(".gifButton").on("click", function () {
        $("#gifHolder1").empty();
        $("#gifHolder2").empty();
        $("#gifHolder3").empty();
        $("#gifHolder4").empty();
        generateInputbar();
        let queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + replaceSpace($(this).attr("name")) + '&limit=10&api_key=dc6zaTOxFJmzC'

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            for (let i = 0; i < 10; i++) {
                if (i === 0) {
                    console.log(response.data[i])
                    $("#gifHolder1").prepend(`<div class="col-auto mr-auto">
                                                <div class="card" style="width: ${response.data[i].images.fixed_height_still.width}px;">
                                                    <img src="${response.data[i].images.fixed_height_still.url}" style="height: 200px;" state="still" dataStill=${response.data[i].images.fixed_height_still.url} dataAnimate=${response.data[i].images.fixed_height.url} class="card-img-top" alt="I am Daku">
                                                    <div class="card-body ">
                                                        <h5 class="card-title text-center">Rating is ${response.data[i].rating.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>`)
                }
                else if (i > 0 && i < 4) {
                    $("#gifHolder2").append(`<div class="col-lg-auto">
                                                <div class="card" style="width: ${response.data[i].images.fixed_height_still.width}px;">
                                                    <img src="${response.data[i].images.fixed_height_still.url}" style="height: 200px;" state="still" dataStill=${response.data[i].images.fixed_height_still.url} dataAnimate=${response.data[i].images.fixed_height.url} class="card-img-top" alt="I am Daku">
                                                    <div class="card-body ">
                                                        <h5 class="card-title text-center">Rating is ${response.data[i].rating.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>`)
                }
                else if (i > 3 && i < 7) {
                    $("#gifHolder3").append(`<div class="col-lg-auto">
                                                <div class="card" style="width: ${response.data[i].images.fixed_height_still.width}px;">
                                                    <img src="${response.data[i].images.fixed_height_still.url}" style="height: 200px;" state="still" dataStill=${response.data[i].images.fixed_height_still.url} dataAnimate=${response.data[i].images.fixed_height.url} class="card-img-top" alt="I am Daku">
                                                    <div class="card-body ">
                                                        <h5 class="card-title text-center">Rating is ${response.data[i].rating.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>`)
                }
                else {
                    $("#gifHolder4").append(`<div class="col-lg-auto">
                                                <div class="card" style="width: ${response.data[i].images.fixed_height_still.width}px;">
                                                    <img src="${response.data[i].images.fixed_height_still.url}" style="height: 200px;" state="still" dataStill=${response.data[i].images.fixed_height_still.url} dataAnimate=${response.data[i].images.fixed_height.url} class="card-img-top" alt="I am Daku">
                                                    <div class="card-body ">
                                                        <h5 class="card-title text-center">Rating is ${response.data[i].rating.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>`)
                }
            }
            gifClick();
            $("#submit").unbind();
            addButton();
        });
    })
}

//MAIN PROCESSING CODE

//Potentially use this for a start game function

createButtons();

generateInputbar();

displayShows();



