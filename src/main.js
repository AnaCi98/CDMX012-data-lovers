import { ordenar, porGenero, porNombre } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/rickandmorty/rickandmorty.js';
// import data from './data/rickandmorty/rickandmorty.js';

const valorInput = document.getElementById("buscar"); //tomar el valor que ingresa el usuario en el buscador
const botonLupa = document.getElementById("lupa"); //Tomar el botón de la lupa 
const valores = data.results; //Variable que toma todos los valores de la data
const busqueda = document.getElementById("popu"); //Parrafo que aparece debajo del buscador que le muestra al usuario los resultados de lo que busco en el buscador (Ejemplo: Resultados de la busqueda de Morty)
const posicion = document.getElementById("all"); //(experimento)Nombre que esta debajo del pasaporte
const modales = document.getElementById("modales");
const nombres = porNombre(valores);
const filtroAlf = document.getElementById("filtroAlf");
const filtroGenero = document.getElementById("filtroGenero");



window.addEventListener("DOMContentLoaded", populares);
function populares(){
  const todosLosNombres = valores.map(function({name}){
    return name;
    })
  const todasLasImagenes = valores.map(function({image}){
    return image;
      })
  const todasLasIds = valores.map(function({id}){
    return id;
    })
  const todasLasEspecies = valores.map(function({species}){
    return species;
      })
  const todosLosGeneros = valores.map(function({gender}){
    return gender;
        })
  const todosLosOrigenes = valores.map(function({origin}){
    return origin.name;
        });
  const todosLosEpisodios = valores.map(function({episode}){
          return episode.length;
              });
posicion.innerHTML = ""; 
for(let i = 0; i< 10;i++){
posicion.innerHTML += `<div class= "conte" >
                        <div class = "frente"> 
                        <a href="#${todasLasIds[i]}"><img src="rickandmorty/pasaporte.png" alt="Pasaporte" class="pasaporte" > </a>
                        <p id="nombre" class="nombres" >${todosLosNombres[i]}</p>
                        </div>
                        <div class= "atras">
                        <a href="#${todasLasIds[i]}"><img src="${todasLasImagenes[i]}" alt="Pasaporte" class="foto"></a>
                        <p class="nombres">${todosLosNombres[i]}</p>
                        </div>
                        </div>
                      `         
                      modales.innerHTML+= ` <div id="${todasLasIds[i]}" class="contmodal">
                      <div id="modal" class="modal">
                      <img src="${todasLasImagenes[i]}" alt="Pasaporte" class="fotomodal">
                      <a href="#vacio"> <img src="rickandmorty/cerrar.png" alt="Cerrar" class="cerrar" ></a>
                      <div class="datos">
                      <p class="moletras">Nombre: ${todosLosNombres[i]}.</p>
                      <p class="moletras">Especie: ${todasLasEspecies[i]} .</p>
                      <p class="moletras">Género:${todosLosGeneros[i]}. </p>
                      <p class="moletras">Origen: ${todosLosOrigenes[i]}</p>
                      <p class="moletras">Capítulos en los que aparece:${todosLosEpisodios[i]}.</p>
                      </div> `            
                    }
}

botonLupa.addEventListener("click", buscador);

   function buscador()// Al dar click a la lupa, 
      {             
            
        let contador = []; 
        posicion.innerHTML = "";  //Limpia la busqueda anterior e inicializar la variable                          //te ejecuta la siguiente funcion
        let buscar = valorInput.value.toLowerCase();
        busqueda.innerHTML= "";
           if(valorInput.value != ""){          
              for (let valor of nombres){
                let nombre = valor.name.toLowerCase();  
                  if(nombre.indexOf(buscar) !== -1){ 
                    contador.push(valor.name);
                    busqueda.innerHTML ="Se encontraron " + contador.length + " resultados para " + "´" + valorInput.value + "´";
                    posicion.innerHTML +=  `<div class= "conte" >
                      <div class = "frente"> 
                      <a href="#${valor.id}"><img src="rickandmorty/pasaporte.png" alt="Pasaporte" class="pasaporte" ></a>
                      <p id="nombre" class="nombres" >${valor.name}</p>
                      </div>
                      <div class= "atras">
                      <a href="#${valor.id}"><img src="${valor.image}" alt="Pasaporte" class="foto"></a>
                      <p class="nombres">${valor.name}</p>
                      </div>
                      </div>
                    `   
                    modales.innerHTML+= ` <div id="${valor.id}" class="contmodal">
                    <div id="modal" class="modal">
                    <img src="${valor.image}" alt="Pasaporte" class="fotomodal">
                    <a href="#vacio"> <img src="rickandmorty/cerrar.png" alt="Cerrar" class="cerrar" ></a>
                    <div class="datos">
                    <p class="moletras">Nombre: ${valor.name}.</p>
                    <p class="moletras">Especie: ${valor.species}.</p>
                    <p class="moletras">Género: ${valor.gender}.</p>
                    <p class="moletras">Origen: ${valor.origin.name}.</p>
                    <p class="moletras">Capítulos en los que aparece:${valor.episode.length} .</p>
                    </div> `
                                   }
             }  } 
             else{
                           posicion.innerHTML +=  ` ` //Es el resultado de una busqueda vacia
                         }
                      }


filtroAlf.addEventListener("change", filtrado);

function filtrado()
                      {  
          let personajesOrdenados = ordenar(this.value, nombres)          
          posicion.innerHTML = "";     
               
            for (let valor of personajesOrdenados)
            {
              posicion.innerHTML +=  `<div class= "conte" >
                                      <div class = "frente"> 
                                      <a href="#${valor.id}"><img src="rickandmorty/pasaporte.png" alt="Pasaporte" class="pasaporte" ></a>
                                      <p id="nombre" class="nombres" >${valor.name}</p>
                                      </div>
                                      <div class= "atras">
                                      <a href="#${valor.id}"><img src="${valor.image}" alt="Pasaporte" class="foto"></a>
                                      <p class="nombres">${valor.name}</p>
                                      </div>
                                      </div>
                                    `   
             modales.innerHTML+= ` <div id="${valor.id}" class="contmodal">
                                    <div id="modal" class="modal">
                                    <img src="${valor.image}" alt="Pasaporte" class="fotomodal">
                                    <a href="#vacio"> <img src="rickandmorty/cerrar.png" alt="Cerrar" class="cerrar" ></a>
                                    <div class="datos">
                                    <p class="moletras">Nombre: ${valor.name}.</p>
                                    <p class="moletras">Especie: ${valor.species}.</p>
                                    <p class="moletras">Género: ${valor.gender}.</p>
                                    <p class="moletras">Origen: ${valor.origin.name}.</p>
                                    <p class="moletras">Capítulos en los que aparece:${valor.episode.length} .</p>
                                    </div> `
            }
                             }  

filtroGenero.addEventListener("change", genero);

    function genero()
                                                   {  
        let personajesGenero = porGenero(this.value, nombres)          
                                       posicion.innerHTML = "";     
                                            
                                         for (let valor of personajesGenero)
                                         {
                                           posicion.innerHTML +=  `<div class= "conte" >
                                                                   <div class = "frente"> 
                                                                   <a href="#${valor.id}"><img src="rickandmorty/pasaporte.png" alt="Pasaporte" class="pasaporte" ></a>
                                                                   <p id="nombre" class="nombres" >${valor.name}</p>
                                                                   </div>
                                                                   <div class= "atras">
                                                                   <a href="#${valor.id}"><img src="${valor.image}" alt="Pasaporte" class="foto"></a>
                                                                   <p class="nombres">${valor.name}</p>
                                                                   </div>
                                                                   </div>
                                                                 `   
                                          modales.innerHTML+= ` <div id="${valor.id}" class="contmodal">
                                                                 <div id="modal" class="modal">
                                                                 <img src="${valor.image}" alt="Pasaporte" class="fotomodal">
                                                                 <a href="#vacio"> <img src="rickandmorty/cerrar.png" alt="Cerrar" class="cerrar" ></a>
                                                                 <div class="datos">
                                                                 <p class="moletras">Nombre: ${valor.name}.</p>
                                                                 <p class="moletras">Especie: ${valor.species}.</p>
                                                                 <p class="moletras">Género: ${valor.gender}.</p>
                                                                 <p class="moletras">Origen: ${valor.origin.name}.</p>
                                                                 <p class="moletras">Capítulos en los que aparece:${valor.episode.length} .</p>
                                                                 </div> `
                                         }
                                                          }  
                                                          
                             
                               