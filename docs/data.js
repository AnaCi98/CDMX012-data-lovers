export const ordenar = (criterio,data) => {

  return data.sort(function (a,b){
  
    if (criterio =="ASC") {
             return  a.name > b.name ? 1 : -1
     }
  
   /* if(criterio == "ASC"){
        if(a.name>b.name){
          return 1;
        } else {
                return -1
        }
            
      }*/
  
    if (criterio =="DESC"){
              return  a.name < b.name ? 1 : -1
       }
      }
  )
  }
    
  
      /*if (criterio == "DESC"){
       if(a.name>b.name){
          return -1;
        }
       else {
         return 1
       }
        }
       })*/
     
  
     
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
      if (criterio=='Female'){
        if (personaje.gender=='Female'){
          return personaje;
        }
      }
    })
  }