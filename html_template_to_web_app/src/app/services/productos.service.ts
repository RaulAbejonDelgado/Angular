import { Injectable } from '@angular/core';
import { Http } from"@angular/http";

@Injectable()
export class ProductosService {
  productos:any[] =[];
  cargandoProductos:boolean = false;
  constructor( private http:Http ) {
    this.cargarProductos();
  }
  public cargarProductos(){
    this.cargandoProductos = true;
    this.http.get('https://my-aplication-46d32.firebaseio.com/productos_idx.json').subscribe(res =>{
      console.log( res.json() );

    })
  }
}
