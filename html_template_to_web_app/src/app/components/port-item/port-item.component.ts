import { Component } from '@angular/core';
import { ActivatedRoute } from"@angular/router";
import { ProductosService } from "../../services/productos.service";

@Component({
  selector: 'app-port-item',
  templateUrl: './port-item.component.html',
  styles: []
})
export class PortItemComponent  {

  producto:any ;

  constructor( private route:ActivatedRoute,
               private _ps:ProductosService){
                route.params.subscribe( parametros=>{
                  //console.log(parametros);
                  console.log(parametros['id']);
                  //_ps.cargarProducto(parametros['id']);
                  });
                })
              }
}
