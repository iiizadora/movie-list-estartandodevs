//Validação para quando estiver vazio
const button = document.querySelector('#btn');
const movieType = document.querySelector('#movie-type');
const movieTaskBox = document.querySelector('movie__tasks');


button.addEventListener('click',()=>{

  if(movieType.value == 0) {
    alert('Por favor, digite um nome de filme!')
  } else{
    newMovie();
  }
})

//funtion para adicionar um novo filme

function newMovie(movieTask){
  
  const nameMovie = document.createAttribute('span');
  nameMovie.setAttribute('class','namemovie-task');
  nameMovie.innerHTML = movieTask;
  movieTaskBox.addEventListener(nameMovie);

  return nameMovie;
}
