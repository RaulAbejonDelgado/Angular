import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
//aqui debemos importar los componentes customizados
//ngmodule decorador que nos permite dentro del modulo principal(app) definir ciertas configuraciones
@NgModule({
	//despues de importarlo ya podemos pasarle a declarations
	//dentro de declartions pondremos, componentes directivas
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent
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
