import { Injectable } from '@angular/core';
import { Http } from"@angular/http";

@Injectable()
export class ProductosService {
  productos:any[] =[];
  productos_filtrados:any[] =[];
  cargandoProductos:boolean = true;
  constructor( private http:Http ) {
    this.cargarProductos();

  }

  //Con la siguiente funcion obtenemos los datos de la tabla productos
  //necesitamos recivir el id/cod
  public cargarProducto( cod:string){
    return this.http.get(`https://my-aplication-46d32.firebaseio.com/productos/${ cod }.json`)
    //.subscribe(res =>{
    //  this.productos = res.json();

    }


  //Con la siguiente funcion obtenemos todos los registros de productos_idx de la base de datos firebase
  public cargarProductos(){
    this.cargandoProductos = true;
    this.http.get('https://my-aplication-46d32.firebaseio.com/productos_idx.json').subscribe(res =>{
      //console.log( res.json() );
      this.productos = res.json();

    })
  }
  public buscarProducto(termino:string){
    //console.log('buscando');
    //console.log(termino);
    this.productos_filtrados = [];
    this.productos.forEach( prod =>{
      termino = termino.toLowerCase();
      var producto = prod.titulo.toLowerCase();
      var categoria = prod.categoria.toLowerCase();
      if(producto == termino || categoria == termino){
          //console.log(prod);
          this.productos_filtrados.push(prod);
          //console.log(this.productos_filtrados);
      }
    })
  }
}
