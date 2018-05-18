import { Component } from '@angular/core';
//injectamos el servicio
import { InformacionService } from"../../services/informacion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent {
  //Creamos una variable que va a tomar el anio actual
  //para despues llamarla desde la vista footer.component.html
  anio:number = new Date().getFullYear()
  //pasandole el public _is:InformacionService tenemos acceso a toda la informacion
  constructor( public _is:InformacionService ){


  }
}
