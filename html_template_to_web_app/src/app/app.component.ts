//Un componente es un elemento logico dentro de nuestra pagina web
//todo dentro de angular es un componente
import { Component } from '@angular/core';
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
  //propiedad/variable publica que podra ser mostrada en su vista relacionada en este caso app.component.html
  title = 'Drohne web app !!';
  //si una variable no se especifica implicitamente sera vista como publica
  public description = 'Practicas del curso Angular';
}
