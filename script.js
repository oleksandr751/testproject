let ListOfFilms = document.getElementById("ListOfFilms");
let element = document.createElement("div");
let element1 = document.createElement("div");
let addnew = document.getElementById("NewFilm")
let FilmYear = document.getElementById("AddFilmYear");
let FilmName = document.getElementById("AddFilmName");
let FilmStars = document.getElementById("AddFilmStars");
let FilmFormat = document.getElementById("AddFilmFormat");
let Submit11 = document.getElementById("Submit11");
let doc;
let inf;
let inf1;
let inf2;



let List = [];

let N = 100;

List[0] = {
    Title: "Troy",
    ReleaseYear: "2004",
    Format: "DVD",
    Stars: "Brad Pitt, Eric Bana, Orlando Bloom, Diane Kruger"
}

List[1] = {
    Title: "Raid",
    ReleaseYear: "2011",
    Format: "DVD",
    Stars: "Iko Uwais, Joe Taslim, Yayan Ruhian, Donny Alamsyah"
}

function AddNewFilm() {
    List[2].Title = FilmName.value;
    List[2].ReleaseYear = FilmYear.value; //цю можеш не дивитись функцию там нижче 
    List[2].Format = FilmFormat.value;
    List[2].Stars = FilmStars.value;
    console.log(List[2].Title)

}

for (let i = 0; i < 2; i++) {

    doc = document.createElement("p");
    inf = document.createElement("p");
    inf1 = document.createElement("p");
    inf2 = document.createElement("p");

    doc.innerHTML = List[i].Title;
    inf.innerHTML = List[i].ReleaseYear;
    inf1.innerHTML = List[i].Format;
    inf2.innerHTML = List[i].Stars;

    // doc.setAttribute("onclick", "onclick")
    // doc.onclick = ToggleInfo();



    element.append(doc);
    element.append(inf);
    element.append(inf1);
    element.append(inf2);

    inf.setAttribute("hidden", "hidden");
    inf1.setAttribute("hidden", "hidden");
    inf2.setAttribute("hidden", "hidden");



    ListOfFilms.appendChild(element);

}


function ToggleInfo() {
    inf.toggleAttribute("hidden")
    inf1.toggleAttribute("hidden")
    inf2.toggleAttribute("hidden")
}

function Toggle() {
    addnew.toggleAttribute("hidden")
}

function AddNewFilm() {

    console.log("Yobaniyrot")
    let doc = document.createElement("p");
    let inf = document.createElement("p");
    let inf1 = document.createElement("p");
    let inf2 = document.createElement("p");
    doc.innerHTML = FilmName.value;
    inf.innerHTML = FilmYear.value;
    inf1.innerHTML = FilmFormat.value;
    inf2.innerHTML = FilmStars.value;
    ListOfFilms.appendChild(doc);
    ListOfFilms.appendChild(inf);
    ListOfFilms.appendChild(inf1);
    ListOfFilms.appendChild(inf2);

}