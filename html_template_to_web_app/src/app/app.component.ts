//Un componente es un elemento logico dentro de nuestra pagina web
//todo dentro de angular es un componente
import { Component } from '@angular/core';

//injectamos el servicio
import { InformacionService } from "./services/informacion.service";
//decorador nos permite cargar atributos que va  a tner el componente y/o las clases
@Component({
  //componente de la pagina principal sobre el que se cargan todos los componente
  selector: 'app-root',
  //vista asociada al componente
  templateUrl: './app.component.html',
  //stilos asociados al componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //con el servicio importado podemos hacer uso de el en el constructor
  //con este elemento deberiamos estar llamando a la funcion que tenemos en
  //services/informacion.service.ts
  constructor ( public _is: InformacionService) {

}
}
