import { InfoRopaService } from "./../info-ropa.service";
import { infoRopa } from "./../infoRopas";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { log } from "util";

@Component({
  selector: "app-panel-admin-eliminar",
  templateUrl: "./panel-admin-eliminar.component.html",
  styleUrls: ["./panel-admin-eliminar.component.css"]
})
export class PanelAdminEliminarComponent implements OnInit {
  constructor(
    private service: InfoRopaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  infoRopas: Array<infoRopa> = [];
  ropaActual: infoRopa;
  isDataLoaded: boolean = false;

  private subscription: Subscription;

  id: number;
  ropa: string;
  marca: string;
  talla: string;
  color: string;
  precio: string;
  genero: string;
  origen: string;

  getRopa(): void {
    this.id = Number(this.route.snapshot.paramMap.get("id"));
    this.ropaActual = this.service.getRopa(this.id);
  }

  volver() {
    this.router.navigateByUrl("/admin");
  }

  confirmar() {
    console.log(this.id);

    this.service.restDeleteRopa(this.id.toString());

    setTimeout(() => {
      this.router.navigateByUrl("/admin");
    }, 500);
  }

  ngOnInit() {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      this.router.navigateByUrl("/login");
    }
    this.service.getRopas();
    this.subscription = this.service.observableRopas.subscribe(item => {
      this.infoRopas = item;
      this.getRopa();
    });
  }
}
