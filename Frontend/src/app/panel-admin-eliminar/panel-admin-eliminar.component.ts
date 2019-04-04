import { infoVuelo } from "./../infoVuelos";
import { InfoVueloService } from "./../info-vuelo.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { log } from 'util';

@Component({
  selector: "app-panel-admin-eliminar",
  templateUrl: "./panel-admin-eliminar.component.html",
  styleUrls: ["./panel-admin-eliminar.component.css"]
})
export class PanelAdminEliminarComponent implements OnInit {
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
    this.router.navigateByUrl("/admin");
  }

  confirmar() {
    console.log(this.id);
    
    this.service.restDeleteVuelo(this.id.toString());

    setTimeout(() => {
      this.router.navigateByUrl("/admin");
    }, 500);
  }

  ngOnInit() {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      this.router.navigateByUrl("/login");
    }
    this.service.getVuelos();
    this.subscription = this.service.observableVuelos.subscribe(item => {
      this.infoVuelos = item;
      this.getVuelo();
    });
  }
}
