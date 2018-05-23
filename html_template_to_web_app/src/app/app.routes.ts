
import { RouterModule, Routes } from '@angular/router';
import{
    AboutComponent,
    PortafolioComponent,
    PortItemComponent,
    SearchComponent
} from "./components/index.paginas";

const app_routes: Routes = [
  //en component debemos poner el componente que contendra la ruta
  { path: 'home', component: PortafolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'port-item/:id', component: PortItemComponent },
  { path: 'buscar/:termino', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

//useHash:true para que aumente la compatibilidad con rutas que no sean html
export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
