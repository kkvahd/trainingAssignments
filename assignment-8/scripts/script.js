const noteNumber = 0;

function saveChanges() {
    console.log("aaaaaaaaaaaaaaa");
    let name = document.getElementById("nameText").value;
    let note = document.getElementById("noteText").value;
    if (name && note) {
        localStorage[name] = noteNumber + note;
    }

    if (noteNumber == 0) {
        let indicator = document.createElement("li");
        indicator.setAttribute("data-target", "#carouselExampleIndicators");
        indicator.setAttribute("data-slide-to", noteNumber);
        indicator.setAttribute("class", "active");
        document.querySelectorAll("#carouselExampleIndicators .carousel-indicators")[0].appendChild(indicator);

        let carouselItem = document.createElement("div");
        carouselItem.setAttribute("class", "carousel-item active");
        let bkg = document.createElement("")
    }

    <
    div class = "carousel-item active" >
        <
        img class = "d-block w-100"
    src = "images/carouselBackground.jpg"
    alt = "First slide" >
        <
        div class = "carousel-caption" >
        <
        h3 > Los Angeles < /h3> <
        p > We had such a great time in LA! < /p> <
        /div> <
        /div>

}

function viewNotes() {
    if (document.getElementById("carouselExampleIndicators").style.display === "none") {
        document.getElementById("carouselExampleIndicators").style.display = "block";
    }
}