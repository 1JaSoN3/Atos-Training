import { Pipe, PipeTransform } from "@angular/core";
import { infoRopa } from "../infoRopas";

@Pipe({
  name: "order"
})
export class OrderPipe implements PipeTransform {
  transform(ropas: Array<infoRopa>): Array<infoRopa> {
    for (let i = 0; i < ropas.length - 1; i++) {
      for (let j = i + 1; j < ropas.length; j++) {
        if (ropas[i].precio > ropas[j].precio) {
          let aux = ropas[i];
          ropas[i] = ropas[j];
          ropas[j] = aux;
        }
      }
    }
    return ropas;
  }
}
