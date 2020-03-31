import { Router } from "@angular/router";
import { InfoRopaService } from "./../info-ropa.service";
import { infoRopa } from "./../infoRopas";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ExcelService } from "./../excel.service";

@Component({
  selector: "app-panel-cliente",
  templateUrl: "./panel-cliente.component.html",
  styleUrls: ["./panel-cliente.component.css"]
})
export class PanelClienteComponent implements OnInit {
  infoRopas: Array<infoRopa>;

  isDataLoaded: boolean = false;
  currentPage: number = 1;
  ropa: string;
  marca: string;
  talla: string;
  color: string;
  precio: string;
  genero: string;
  origen: string;

  private subscription: Subscription;

  constructor(
    private service: InfoRopaService,
    private serviceexcel: ExcelService,
    private router: Router
  ) {}

  ngOnInit() {
    if (localStorage.getItem("token") == undefined) {
      this.router.navigateByUrl("/login");
    }
    this.service.getRopas();
    this.subscription = this.service.observableRopas.subscribe(item => {
      this.infoRopas = item;
    });
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  exporta() {
    this.serviceexcel.exportAsExcelFile(this.infoRopas, "Ropas");
  }

  limpiarCampos() {
    this.ropa = undefined;
    this.marca = undefined;
    this.talla = undefined;
    this.color = undefined;
    this.precio = undefined;
    this.genero = undefined;
    this.origen = undefined;
  }
}
