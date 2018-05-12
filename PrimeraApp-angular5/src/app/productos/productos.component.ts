//definimos una clase de un componente
//para poder crear un componente tenemos que importar Component que es un modulo interno de angular
//Es un objeto que nos permite crear componentes
import { Component } from '@angular/core';

//usamos el decorador @Component
//para definir los atributor y variables que va a tener el componente pasandole un json con dichas propiedades
@Component({
	//En que etiqueta se va a cargar el componente
	selector: 'productos',
	//agregamos la vista del componente, podemos meterlo en linea
	//En linea = Con las comillas invertidas podemos cargar el codigo html en este mismo fichero
	//Una vez definidos las propiedades en la clase podremos llamarlas desde la vista
	template: `
		<h2>
			Componente de {{ nombre }}
		</h2>
		//en la vista podemos usr *ngIf como si fuese un t-if de qweb
		<h3 style="background: yellow;">
			{{ description }}
		</h3>
		<h4 *ngIf="sale_ok">El producto puede ser vendido y es del tipo: {{ tipo }}

		</h4>
		<div class="row">
			<div class="col-4" style="border: 1px solid black;">
			xd
			</div>
			<div class="col-4" style="border: 1px solid black;">
			xd
			</div>
			<div class="col-4" style="border: 1px solid black;">
			xd
			</div>
		</div>
		<div style="text-align:center;">
			<table style="border:1px black solid;margin: 0 auto;">
				<thead>
					<th>
						Nombre de producto
					</th>
				</thead>
				<!--Iteramos sobre un array y lo mostramos en un td-->
				<tbody *ngFor="let product of productos_oferta">
					<td style="border:1px solid black;">
						{{ product }}
					</td>
				</tbody>
			</table>
		</div>
	`,

})

//Ahora necesitamos exportar la clase del componente que dara soporte a las diferentes propiedades
//teniendo la logica del componente
//para poder importar la clase primero se ha de exportar para poder usarla fuera de este fichero
export class ProductosComponent{
	//Y dentro de la clase definimos las propiedades que necesitemos
	public nombre = 'Productos 2018';
	public description = 'Productos de la temporada ';
	public tipo = 'consumible';
	public sale_ok = true;
	public productos_oferta = [
			'tornillo',
			'arandela',
			'polea',
			'cuerda',
			'junta',
			'manguitos'
	];
}