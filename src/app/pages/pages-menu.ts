import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',
    icon: 'home-outline',
    // link: '/pages/dona',
    link: '/pages/comingsoon',


  },

  {
    title: 'Monitoreo',
    icon: 'map-outline',
    // link: '/pages/mapas',
    link: '/pages/tracing',
   },


  {
    title: 'Cruces',
    icon: 'pin-outline',
    // link: '/organizacion/listar',
    link: '/pages/comingsoon',
  },
  {
    title: 'Gestionar',
    icon: 'edit-outline',
    children: [
      {
        title: 'Ondas de Verde',
        // link: '/pages/forms/inputs',
        link: '/pages/comingsoon',
      },
      {
        title: 'DTD',
        // link: '/pages/forms/layouts',
        link: '/pages/comingsoon',
      },
      {
        title: 'Desfase',
        // link: '/pages/forms/buttons',
        link: '/pages/comingsoon',
      },
      {
        title: 'Tabla Horaria',
        // link: '/pages/forms/datepicker',
        link: '/pages/comingsoon',
      },
    ],
  },
  {
    title: 'Controladores',
    icon: 'shake-outline',
    // link: '/pages/component',
    link: '/pages/comingsoon',
   },
  {
    title: 'Comandos',
    icon: 'browser-outline',
    children: [
      {
        title: 'Consola',
        // link: '/pages/modal-overlays/dialog',
        link: '/pages/comingsoon',
      },
      {
        title: 'Terminal remoto',
        // link: '/pages/modal-overlays/window',
        link: '/pages/comingsoon',
      },
    ],
  },
  {
    title: 'Incidencias',
    icon: 'info-outline',
    link: '/pages/comingsoon',
   },

];
