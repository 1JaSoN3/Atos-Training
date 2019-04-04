import { Pipe, PipeTransform } from '@angular/core';
import { infoVuelo } from '../infoVuelos';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(vuelos: Array<infoVuelo>, searchVar: string, search: string): Array<infoVuelo> {

    switch (search) {
      case 'vuelo': {
        if (!vuelos || !searchVar) {
          return vuelos;
          }
        return vuelos.filter(vuelo => vuelo.vuelo.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !== -1);
        break;
      }
      case 'destino': {
        if (!vuelos || !searchVar) {
          return vuelos;
        }
        return vuelos.filter(vuelo => vuelo.destino.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !== -1);
        break;
      }
      case 'embarque': {
        if (!vuelos || !searchVar) {
          return vuelos;
        }
        return vuelos.filter(vuelo => vuelo.embarque.toString().indexOf(searchVar.toLocaleLowerCase()) !== -1 );
        break;
      }
      case 'puerta': {
        if (!vuelos || !searchVar) {
          return vuelos;
        }
        return vuelos.filter(vuelo => vuelo.puerta.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !== -1);
        break;
      }
      case 'salida': {
        if (!vuelos || !searchVar) {
          return vuelos;
        }
        return vuelos.filter(vuelo => vuelo.salida.toString().indexOf(searchVar.toLocaleLowerCase()) !== -1);
        break;
      }
      default : {
        return vuelos;
      }
    }
  }
}
