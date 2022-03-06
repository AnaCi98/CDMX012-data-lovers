export const ordenar = (data) => {
  return data.sort((a, b) => {
      if(a.name>b.name){
        return 1;
      }
  })
}

export const porNombre = (data) => {
  return data.filter( (personaje) =>{
    return personaje.name;
  })
}

export const porGenero = (criterio,data) => {
  return data.filter( (personaje) =>{
    if(criterio=='Male'){
      if(personaje.gender=='Male'){
        return personaje;
      }
    }
    if(criterio=='Female'){
      if(personaje.gender=='Female'){
        return personaje;
      }
    }
  })
}
