import { Component } from '@angular/core';
import { ActivatedRoute } from"@angular/router";

@Component({
  selector: 'app-port-item',
  templateUrl: './port-item.component.html',
  styles: []
})
export class PortItemComponent  {
  constructor( private route:ActivatedRoute){
    route.params.subscribe( parametros=>{
      console.log(parametros);
      console.log(parametros['id']);
    })
  }
}
