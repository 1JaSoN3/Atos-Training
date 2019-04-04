import { Pipe, PipeTransform } from '@angular/core';
import { infoVuelo } from '../infoVuelos';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(vuelos: Array<infoVuelo>): Array<infoVuelo> {

    for (let i = 0; i < vuelos.length - 1; i++) {

      for (let j = i + 1; j < vuelos.length; j++) {

        if (vuelos[i].salida > vuelos[j].salida) {

          let aux = vuelos[i];
          vuelos[i] = vuelos[j];
          vuelos[j] = aux;
        }
      }
    }
    return vuelos;
  }
}
