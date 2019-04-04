import { infoVuelo } from "./../infoVuelos";
import { InfoVueloService } from "./../info-vuelo.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { log } from 'util';

@Component({
  selector: "app-panel-cliente-detalles",
  templateUrl: "./panel-cliente-detalles.component.html",
  styleUrls: ["./panel-cliente-detalles.component.css"]
})
export class PanelClienteDetallesComponent implements OnInit {
  constructor(
    private service: InfoVueloService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  infoVuelos: Array<infoVuelo> = [];
  vueloActual: infoVuelo;
  isDataLoaded: boolean = false;

  private subscription: Subscription;

  id: number;
  vuelo: string;
  destino: string;
  embarque: Date;
  puerta: string;
  salida: Date;
  tiempo: Date;
  avion: string;

  getVuelo(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.vueloActual = this.service.getVuelo(this.id);
  }

  volver() {
    this.router.navigateByUrl("/cliente");
  }

  ngOnInit() {
    if (localStorage.getItem("token") == undefined) {
      this.router.navigateByUrl("/login");
    }
    this.service.getVuelos();
    this.subscription = this.service.observableVuelos.subscribe(item => {
      this.infoVuelos = item;
      this.getVuelo();
    });
  }
}
