//Validação para quando estiver vazio
const button = document.querySelector('#btn');
const movieType = document.querySelector('#movie-type');
const movieTaskBox = document.querySelector('#movie__tasks');
const buttonDel = document.querySelector('#btn-delete')




//funtion para adicionar um novo filme
function addNewMovies(textoNovo){
  const addNewItem = document.createElement('span');
  addNewItem.setAttribute('class','namemovie-task');
  
  addNewItem.innerHTML =textoNovo

  movieTaskBox.appendChild(addNewItem);
  
  return addNewItem;
}



button.addEventListener('click',()=>{

  if(movieType.value == "") {
    alert('Por favor, digite um título de filme!')
  } else {
    addNewMovies(movieType.value);
    
  }

  movieType.value = "";
  movieType.focus();
});


// Atualiza a página e limpa as escolhas
buttonDel.addEventListener("click",()=>{
  document.location.reload();
})

//Local Storage
let saveInformation = ()=> {

  let movieItem = movieType.value;
  localStorage.setItem('TitleMovie', movieItem)
}

 document.onchange= saveInformation;
 