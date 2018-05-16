import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  //Creamos una variable que va a tomar el anio actual
  //para despues llamarla desde la vista footer.component.html
  anio:number = new Date().getFullYear()
  //constructor() { }

}
