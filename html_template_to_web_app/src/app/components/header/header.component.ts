import { Component } from '@angular/core';

//injectamos el servicio para poder hacer uso del json

import { InformacionService } from "../../services/informacion.service";
//importo para poder ir desde buscarProducto
import {Router} from"@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent  {
  //pasandole el public _is:InformacionService tenemos acceso a toda la informacion
  constructor( public _is:InformacionService,
              private router:Router){}

  buscarProducto( termino:string,
                  //injectamos en la funcion para poder hacer uso de el
                  ){
      //console.log( termino);
      this.router.navigate(['buscar', termino]);
    }
}
