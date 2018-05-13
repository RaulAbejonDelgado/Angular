import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//aqui debemos importar los componentes customizados
//ngmodule decorador que nos permite dentro del modulo principal(app) definir ciertas configuraciones
@NgModule({
	//despues de importarlo ya podemos pasarle a declarations
	//dentro de declartions pondremos, componentes directivas
  declarations: [
    AppComponent,
  ],
  //modulos internos de angular o modulos nuestros
  imports: [
    BrowserModule
  ],
  //cargaremos los servicios internos de angular o propios
  providers: [],
  //componente principal que se va a cargar al acceder a la pagina web
  bootstrap: [AppComponent]
})
export class AppModule { }
