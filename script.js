let ListOfFilms = document.getElementById("ListOfFilms");
let addnew = document.getElementById("NewFilm")
let FilmYear = document.getElementById("AddFilmYear");
let FilmName = document.getElementById("AddFilmName");
let FilmStars = document.getElementById("AddFilmStars");
let FilmFormat = document.getElementById("AddFilmFormat");
let Submit11 = document.getElementById("Submit11");
let importfilms = document.getElementById("ImportFilms");
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

    List.push(list);
    FilmName.value = "";
    FilmYear.value = "";
    FilmFormat.value = "";
    FilmStars.value = "";
    ShowFilms();

}

function ShowFilms() {
    ListOfFilms.innerHTML = "";
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


        let div2 = document.getElementsByClassName("div2");


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
    List.length = 0;
}

function ImportFilms() {
    importfilms.onchange = function() {
        let file = this.files[0];
        var reader = new FileReader();
        reader.onload = function(e) {

            const movies = e.target.result;
            Upload(movies);
            // let lines = this.result.replace(/\bTitle: \b/g, "");




            // for (let j = 0; j < lines.length; j++) {
            //     console.log(lines[j]);
            // }
        }
        reader.readAsText(file);
    }

}

function Upload(movies) {
    const arr = movies.replace(/\bTitle: \b/g, "").replace(/\bRelease Year: \b/g, "").replace(/\bFormat: \b/g, "").replace(/\bStars: \b/g, "").split("\n");
    console.log(arr);
    for (let i = 0; i < arr.length; i += 5) {
        let list1 = {
            Title: arr[i],
            ReleaseYear: arr[i + 1],
            Format: arr[i + 2],
            Stars: arr[i + 3]

        }
        List.push(list1);

    }
    console.log(List);
    console.log(typeof(arr[0]));
    ShowFilms();



}

function SearchFunc() {
    let input, filter, a, txtValue, li;

    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    li = ListOfFilms.getElementsByTagName('div');

    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }



}

ShowFilms();
ImportFilms();