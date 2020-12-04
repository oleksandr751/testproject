let ListOfFilms = document.getElementById("ListOfFilms");
let addnew = document.getElementById("NewFilm")
let FilmYear = document.getElementById("AddFilmYear");
let FilmName = document.getElementById("AddFilmName");
let FilmStars = document.getElementById("AddFilmStars");
let FilmFormat = document.getElementById("AddFilmFormat");
let Submit11 = document.getElementById("Submit11");
let element;
let element1;
let doc;
let doc1;
let inf;
let inf1;
let inf2;

let List = [{
        Title: "Troy",
        ReleaseYear: "2004",
        Format: "DVD",
        Stars: "Brad Pitt, Eric Bana, Orlando Bloom, Diane Kruger"
    },
    {
        Title: "Raid",
        ReleaseYear: "2011",
        Format: "DVD",
        Stars: "Iko Uwais, Joe Taslim, Yayan Ruhian, Donny Alamsyah"
    }
];

function AddNewFilm() {
    let list = {
        Title: FilmName.value,
        ReleaseYear: FilmYear.value,
        Format: FilmFormat.value,
        Stars: FilmStars.value
    }
    ListOfFilms.innerHTML = "";
    List.push(list);
    FilmName.value = "";
    FilmYear.value = "";
    FilmFormat.value = "";
    FilmStars.value = "";
    ShowFilms();

}

function ShowFilms() {

    for (let i = 0; i < List.length; i++) {

        element = document.createElement("div");
        element.className = "div1"
        element1 = document.createElement("div");
        element1.className = "div2"
        doc = document.createElement("p");
        inf = document.createElement("p");
        inf1 = document.createElement("p");
        inf2 = document.createElement("p");
        doc1 = document.createElement("button");

        doc.innerHTML = List[i].Title;
        doc1.innerHTML = "ShowInfo";
        inf.innerHTML = List[i].ReleaseYear;
        inf1.innerHTML = List[i].Format;
        inf2.innerHTML = List[i].Stars;

        doc1.onclick = function() {
            document.getElementsByClassName("div2")[i].toggleAttribute("hidden");
        }

        element.append(doc);
        element.append(doc1);
        element.append(element1);
        element1.append(inf);
        element1.append(inf1);
        element1.append(inf2);
        ListOfFilms.append(element);

    }

}

function ToggleInfo() {
    let a = document.getElementsByClassName("InfoF");
}

function Toggle() {
    addnew.toggleAttribute("hidden")
}

function DeleteAllFilms() {
    ListOfFilms.innerHTML = "";
}

function ImportFilms() {


}

ShowFilms();