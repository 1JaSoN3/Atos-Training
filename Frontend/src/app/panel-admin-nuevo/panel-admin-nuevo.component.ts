import { nuevoVuelo } from './../nuevoVuelo';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoVueloService } from './../info-vuelo.service';
import { Component, OnInit } from "@angular/core";
import { infoVuelo } from '../infoVuelos';

@Component({
  selector: "app-panel-admin-nuevo",
  templateUrl: "./panel-admin-nuevo.component.html",
  styleUrls: ["./panel-admin-nuevo.component.css"]
})
export class PanelAdminNuevoComponent implements OnInit {
  constructor(
    private service: InfoVueloService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  vuelo: nuevoVuelo;

  volver() {
    this.router.navigateByUrl("/admin");
  }

  salvar() {
    console.log(this.vuelo);
    this.service.restPostVuelo(this.vuelo);
    setTimeout(() => {
      this.router.navigateByUrl("/admin");
    }, 500); 
  }

  ngOnInit() {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      this.router.navigateByUrl("/login");
    }
    this.vuelo = new nuevoVuelo();
    this.vuelo.vuelo = "";
    this.vuelo.destino = "";
    this.vuelo.puerta = "";
    this.vuelo.embarque = null;
    this.vuelo.tiempo = null;
    this.vuelo.salida = null;
    this.vuelo.avion = "";
  }
}
