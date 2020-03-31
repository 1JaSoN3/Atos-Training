import { infoRopa } from "./../infoRopas";
import { InfoRopaService } from "./../info-ropa.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { log } from "util";

@Component({
  selector: "app-panel-cliente-detalles",
  templateUrl: "./panel-cliente-detalles.component.html",
  styleUrls: ["./panel-cliente-detalles.component.css"]
})
export class PanelClienteDetallesComponent implements OnInit {
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
    this.router.navigateByUrl("/cliente");
  }

  ngOnInit() {
    if (localStorage.getItem("token") == undefined) {
      this.router.navigateByUrl("/login");
    }
    this.service.getRopas();
    this.subscription = this.service.observableRopas.subscribe(item => {
      this.infoRopas = item;
      this.getRopa();
    });
  }
}
