const API_KEY = 'api_key=334de744f6e8fa979ca36deefec77824';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const searchURL = BASE_URL + '/search/movie?'+API_KEY;

const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]
  const main = document.getElementById('main');
  const form =  document.getElementById('form');
  const search = document.getElementById('search');
  const tagsEl = document.getElementById('tags');
  
  const prev = document.getElementById('prev')
  const next = document.getElementById('next')
  const current = document.getElementById('current')
  
  var currentPage = 1;
  var nextPage = 2;
  var prevPage = 3;
  var lastUrl = '';
  var totalPages = 100;
  
var selectedGenre = []
opciones();
function opciones(){
      select = document.getElementById("año");
      genres.forEach((genre ) => {
         
          option = document.createElement("option");
          option.value = genre.id;
          option.text = genre.name;;
          select.appendChild(option);
 
      })
}

function cambia(){
  var cosa;
  //Se toma el vamor de la "cosa seleccionada"
  cosa = document.form.año[document.form.año.selectedIndex].value;
  var selected = document.form.año[document.form.año.selectedIndex].text;
  if(cosa!=0){

    var w = window.open("index2.html");
    w.myVariable = selected;
    w.myVariable2 = cosa;
  }

}

