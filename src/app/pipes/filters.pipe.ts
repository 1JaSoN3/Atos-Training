import { Pipe, PipeTransform } from "@angular/core";
import { infoRopa } from "../infoRopas";

@Pipe({
  name: "filters"
})
export class FiltersPipe implements PipeTransform {
  transform(
    ropas: Array<infoRopa>,
    searchVar: string,
    search: string
  ): Array<infoRopa> {
    switch (search) {
      case "ropa": {
        if (!ropas || !searchVar) {
          return ropas;
        }
        return ropas.filter(
          ropa =>
            ropa.ropa.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !==
            -1
        );
        break;
      }
      case "marca": {
        if (!ropas || !searchVar) {
          return ropas;
        }
        return ropas.filter(
          ropa =>
            ropa.marca.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !==
            -1
        );
        break;
      }
      case "talla": {
        if (!ropas || !searchVar) {
          return ropas;
        }
        return ropas.filter(
          ropa =>
            ropa.talla.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !==
            -1
        );
        break;
      }
      case "color": {
        if (!ropas || !searchVar) {
          return ropas;
        }
        return ropas.filter(
          ropa =>
            ropa.color.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !==
            -1
        );
        break;
      }
      case "precio": {
        if (!ropas || !searchVar) {
          return ropas;
        }
        return ropas.filter(
          ropa =>
            ropa.precio.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !==
            -1
        );
        break;
      }
      case "genero": {
        if (!ropas || !searchVar) {
          return ropas;
        }
        return ropas.filter(
          ropa =>
            ropa.genero.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !==
            -1
        );
        break;
      }
      default: {
        return ropas;
      }
      case "origen": {
        if (!ropas || !searchVar) {
          return ropas;
        }
        return ropas.filter(
          ropa =>
            ropa.origen.toLowerCase().indexOf(searchVar.toLocaleLowerCase()) !==
            -1
        );
        break;
      }
    }
  }
}
