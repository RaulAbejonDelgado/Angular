# Coversion de un template html a Angular Web App
    Agrego esta rama para ver la evolucion sobre el proyecto inicial que esta en la rama master


## 1
  En el portfolio observamos una carpeta assets, el contenido de esta carpeta la copiamos en la carpeta assets de nuestro proyecto html_template_to_web_app/src/assets.

## 2
    Elegimos como contenido inicial el archivo portfolio-masonry.html y copiamos las referencias de los
    recursos estaticos a nuestro archivo index del proyecto
    Elementos que copiamos del head:
    <link rel="icon" type="image/svg+xml" href="assets/img/urku-ico.svg">
    <link rel="stylesheet" href="assets/css/aurora-pack.min.css">
    <link rel="stylesheet" href="assets/css/aurora-theme-base.min.css">
    <link rel="stylesheet" href="assets/css/urku.css">
    Elementos que copiamos en el body,ultima zona
    <script src="assets/js/svg4everybody.min.js"></script>
    <script>svg4everybody();</script>
## 3
    Trabajando el header de la pagina:
    Creamos un nuevo componente para el header:
    Desde la terminal posicionados en el directorio del proyecto creamos el componente con el siguiente comando:
    ng g c components/header
    Con el siguiente comando nos deberia haber agregado los datos correspondientes en el archivo app.module.ts agregando import { HeaderComponent } from './components/header/header.component';
    y en el decorador @NgModule deberia añadir HeaderComponent.(Revisar cuando se realize el proceso para verificarlo).
    hemos creado automaticamente la carpeta component/header con un andamiage base
    -header.component.css
    -header.component.html
    -header.component.spec.ts
    -header.component.ts
    Para la practica que estamos realizando , podemos suprimir el archivo :
    -header.component.css
    -header.component.spec.ts
    En el header.component.ts
    dejamos la siguiente extructura:
    import { Component } from '@angular/core';

    @Component({
      selector: 'app-header',
      templateUrl: './header.component.html',
    })
    export class HeaderComponent  {

    }
