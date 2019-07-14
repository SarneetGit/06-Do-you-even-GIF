// Global Variable Declaration //

//List of shows
var tvShows = ["Game+of+Thrones", "The+Office", "Breaking+Bad", "The+Simpsons", "Family+Guy", "Stranger+Things", "House+of+Cards", "South+Park", "Suits", "Fresh+Prince+of+Belair"]



// Functions //

//Populate a button :)
function populateButton(tvShow) {
    let tempName = replacePlus(tvShow)
    $("#buttonHolder").append(`<button type="button" class="btn btn-secondary" name="${tempName}">${tempName}</button>`)
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
    $(".card-img-top").click(function(){
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

//Potentially use this for a start game function
for (let i in tvShows) {
    populateButton(tvShows[i])
}

$(document).ready(function(){
    $(".btn").click(function(){
        $("#gifHolder1").empty();
        $("#gifHolder2").empty();
        $("#gifHolder3").empty();
        let queryURL = 'https://api.giphy.com/v1/gifs/search?q='+replaceSpace($(this).attr("name"))+'&limit=10&api_key=dc6zaTOxFJmzC'
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            for (let i = 0; i < 10; i++) {
                if (i < 4) {
                    console.log(response.data[i])
                    console.log(response.data[i].images.fixed_width_still.url) 
                    console.log(response.data[i].images.fixed_width.url)
                    $("#gifHolder1").prepend(`<div class="col-lg-2">
                                                <div class="card" style="width: 18rem;">
                                                    <img src="${response.data[i].images.fixed_width_still.url}" state="still" dataStill=${response.data[i].images.fixed_width_still.url} dataAnimate=${response.data[i].images.fixed_width.url} class="card-img-top" alt="I am Daku">
                                                    <div class="card-body ">
                                                        <h5 class="card-title text-center">Rating is ${response.data[i].rating.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>`)
                }
                else if (i > 3 && i < 8) {
                    console.log(response.data[i])
                    console.log(response.data[i].images.fixed_width_still.url)
                    console.log(response.data[i].images.fixed_width.url)
                    $("#gifHolder2").append(`<div class="col-lg-2">
                                                <div class="card" style="width: 18rem;">
                                                    <img src="${response.data[i].images.fixed_width_still.url}" state="still" dataStill=${response.data[i].images.fixed_width_still.url} dataAnimate=${response.data[i].images.fixed_width.url} class="card-img-top" alt="I am Daku">
                                                    <div class="card-body ">
                                                        <h5 class="card-title text-center">Rating is ${response.data[i].rating.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>`)
                }
                else {
                    console.log(response.data[i])
                    console.log(response.data[i].images.fixed_width_still.url)
                    console.log(response.data[i].images.fixed_width.url)
                    $("#gifHolder3").append(`<div class="col-lg-2">
                                                <div class="card" style="width: 18rem;">
                                                    <img src="${response.data[i].images.fixed_width_still.url}" state="still" dataStill=${response.data[i].images.fixed_width_still.url} dataAnimate=${response.data[i].images.fixed_width.url} class="card-img-top" alt="I am Daku">
                                                    <div class="card-body ">
                                                        <h5 class="card-title text-center">Rating is ${response.data[i].rating.toUpperCase()}</h5>
                                                    </div>
                                                </div>
                                            </div>`)
                }                
            }
            gifClick()
        });  
    })
});



// <button type="button" class="btn btn-secondary"></button>