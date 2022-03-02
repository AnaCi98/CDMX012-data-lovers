//La funcion ordenar toma la data y la ordena alfabeticamente, nos regresa la data ordenada alfabeticamente
export const ordenarABC = (data) => {
let nombresPersonaje = data.sort((a,b)=>{
  if(a.name<b.name){ //es como decir que "a" va primero que "b"
    return -1;
  }
  if(a.name>b.name){ // "b" va primero que "a"
      return 1;
    }
}
  );
  return nombresPersonaje;
};

export let porNombre = (data,condition) => {
return data.filter(personaje => {return personaje.name.toLowerCase() === condition});
}


export const anotherExample = () => {
  return 'OMG';
};
