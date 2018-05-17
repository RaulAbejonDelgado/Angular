import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { app_routing } from "./app.routes";

//Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortItemComponent } from './components/port-item/port-item.component';
//aqui debemos importar los componentes customizados
//ngmodule decorador que nos permite dentro del modulo principal(app) definir ciertas configuraciones
@NgModule({
	//despues de importarlo ya podemos pasarle a declarations
	//dentro de declartions pondremos, componentes directivas
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortItemComponent
  ],
  //modulos internos de angular o modulos nuestros
  imports: [
    BrowserModule,
    app_routing
  ],
  //cargaremos los servicios internos de angular o propios
  providers: [],
  //componente principal que se va a cargar al acceder a la pagina web
  bootstrap: [AppComponent]
})
export class AppModule { }
