import { Injectable } from '@angular/core';

//debemos leer el archivo json
import { Http } from "@angular/http";

@Injectable()
export class InformacionService {
  //creamos una propiedad que contengas las propiedades del json
  info:any = {},
  //Ahora podemos usar Http en el constructor
  constructor( public http:Http) {
  //leemos el archivo json en get añadimos la ubicacion del archivo json
  //con subscribe recivimos los datos que haya en la ruta
  this.http.get("assets/data/info.pagina.json").subscribe( data =>{
    //si solo queremos ver los datos del json data.json()
    //si queremos ver todo, datos y respuestas podemos visualizarlo en data
    console.log(data);
    console.log(data.json());
    //recargamos nuestro objeto info con los datos del json
    this.info = data.json();
})
 }
}
