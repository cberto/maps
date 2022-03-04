import { Component } from '@angular/core';
import { ApplicationRef, ComponentFactoryResolver, Injector  } from '@angular/core';
import * as L from 'leaflet';
import * as leaflet from 'leaflet';
import { PopoverComponent } from '../popover/popover.component';


@Component({
  selector: 'ngx-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  entryComponents: [PopoverComponent],
})
export class MapComponent  {

  constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {
  }
  private readonly initialPosition = leaflet.latLng([-33.438775, -70.664869]);


 private compilePopup(component, onAttach): any {
    const compFactory: any = this.resolver.resolveComponentFactory(component);
    const compRef: any = compFactory.create(this.injector);

    if (onAttach)
      onAttach(compRef);

    this.appRef.attachView(compRef.hostView);
    compRef.onDestroy(() => this.appRef.detachView(compRef.hostView));

    const div = document.createElement('div');
    div.appendChild(compRef.location.nativeElement);
    return div;
 }
  options = {
  layers: [
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
    }),
  ],
  zoom: 50,
  center: this.initialPosition,
};

onMapReady(map) {
  const markerIcon = {
    icon: L.icon({
      iconSize: [30, 30],
      shadowSize: [31, 31],
      iconAnchor: [10, 10],
      shadowAnchor: [11, 11],
      popupAnchor: [2, -40],
      iconUrl:
        'assets/images/Indicadores/pinGreen.png',
      shadowUrl:
        'assets/images/sombra.png',
    }),
  };
  const markerIcon2 = {
    icon: L.icon({
      iconSize: [30, 30],
      shadowSize: [31, 31],
      iconAnchor: [10, 10],
      shadowAnchor: [11, 11],
      popupAnchor: [2, -40],
      iconUrl:
       'assets/images/Indicadores/pinOrange.png',
      shadowUrl:
        'assets/images/sombra.png',
    }),
  };


   const markerPopup: any =
    this.compilePopup(PopoverComponent, (c) => {
      c.instance.customText = 'Custom';
    });



  L.marker([-33.438775, -70.664869], markerIcon).addTo(map)
  .bindPopup( markerPopup);


  L.marker([-33.438820, -70.665490], markerIcon2).addTo(map);


}
}
