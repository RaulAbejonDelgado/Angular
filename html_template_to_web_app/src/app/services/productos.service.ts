import { Injectable } from '@angular/core';
import { Http } from"@angular/http";

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos:any[] =[];
  constructor( private http:Http ) {

  }
  public cargarProductos(){
    this.http.get('https://bilboodoo-d7407.firebaseio.com/productos_idx.json').subscribe(res =>{
      console.log( res.json() );
    })
  }
}
