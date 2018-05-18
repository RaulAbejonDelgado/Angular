import { Component } from '@angular/core';

//injectamos el servicio para poder hacer uso del json

import { InformacionService } from "../../services/informacion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent  {
  //pasandole el public _is:InformacionService tenemos acceso a toda la informacion
  constructor( public _is:InformacionService ){


  }
}
