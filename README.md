**Nebular**

[Nebular](https://akveo.github.io/ngx-admin/docs/getting-started/what-is-ngxadmin#assumptions) es una librería para interfaz de usuarios angular basada en las especificaciones de Eva Design System, con más de 40 componentes de interfaz de usuario, 4 temas visuales, módulos de autenticación y seguridad.
Para integrar Nebular es necesario que nuestro proyecto este configurado SCSS, normalmente cuando creamos un nuevo proyecto en angular se nos solicita información sobre las características que queremos incluir en nuestro proyecto, como son: Angular routing y que formato de hoja de estilo usaremos, en lo personal en windows, no solicita dicha información así que,cuando crearemos un proyecto en nuestro directorio preferido configurado con SCSS.


**Instalar Nebular**


1. Instalar [Python](https://www.python.org/ftp/python/3.9.6/python-3.9.6-amd64.exe)
2. Clonar el [repo](https://github.com/akveo/ngx-admin.git)
3. Por consola instalar Sass `npm install node-sass@latest`
4. Una vez realizada la instalcion ejecutar `npm i`
5. Por último, `npm start` y navegar  localhost:4200/

**Personalizar tema**

El archivo `themes.scss` nos ayuda a personalizar nuestro propio tema, en el archivo `styles.scss` importara los estilos de nebular para usarlos en nuestra aplicación, en el `app.module.ts` importara lo necesario para usar los componentes de Nebular.

```
import { BrowserAnimationsModule } from '@angular/platform-browser/animations;
import { NbTehemeModule, NbLayoutModule } from '@nebular/theme;
import { NbEvaIconsModule } from '@nebular/eva-icons;
@NgModule({
imports: [
  NbThemeModule.forRoot({ name: 'default}),
  NbLayoutModule,
  NbEvaIconsModule
]})
```
**Navbar con logo de la empresa**

Para poder poner el logo de la empresa primero tenemos que insertar la imagen dentro de la carpeta images que se encuentra en `src/assets/images`
Luego invocamos la imagen dentro de `src/app/@theme/components/header/ header.component.html `

   `<img  class="logo" src="assets/images/logoAuter.png" alt="logo" style="width:150px;">`

**Menú collapsable izquierdo**

Para poder agregar/ editar el menú tenemos que hacerlo desde `src/app/pages/ pages-menu.ts` y dento de MENU_ITEM añadir el título, icono y la ruta a donde dirigir 
Ej:
```
title: 'Home',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
```
**Ruteo**

Al hacer click en cada elemento del menú, abre la vista requerida. Para poder realizarlo creamos un modulo en donde comenzaremos de cero creando una vista. En este [video](https://www.youtube.com/watch?v=XbAJky1TXCU&t=686s&ab_channel=DevInvestidor) se muetra como realizarlo y luego lo llamaremos dentro de `src/app/pages/pages-menu.ts`

Ej:
```
title: 'Controladores',
    icon: 'keypad-outline',
    link: '/pages/listar' 
```

Se recomienda usar la extension de [Angular](https://marketplace.visualstudio.com/items?itemName=alexiv.vscode-angular2-files) para crear un modulo o el comando `ng g m [module-name] ` proviene de _ng generate module_. 

NO copiar una carpeta como esta hecho en el video

**Algunos comandos de uso común:**

ng g cl my-new-class: nueva clase

ng g c my-new-component: Nuevo componente

ng g d my-new-directive: nueva directiva

ng g e my-new-enum: Nueva enumeración

ng g m my-new-module: Nuevo módulo

ng g p my-new-pipe: nueva tubería

ng g s my-new-service: Nuevo servicio
