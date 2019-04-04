import { Router } from '@angular/router';
import { InfoVueloService } from "./../info-vuelo.service";
import { infoVuelo } from "./../infoVuelos";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ExcelService } from "./../excel.service"

@Component({
  selector: "app-panel-cliente",
  templateUrl: "./panel-cliente.component.html",
  styleUrls: ["./panel-cliente.component.css"]
})
export class PanelClienteComponent implements OnInit {
  infoVuelos: Array<infoVuelo>;

  isDataLoaded: boolean = false;
  currentPage: number = 1;
  vuelo: string;
  destino: string;
  embarque: string;
  puerta: string;
  salida: string;

  private subscription: Subscription;

  constructor(private service: InfoVueloService, private serviceexcel: ExcelService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("token") == undefined) {
      this.router.navigateByUrl("/login");
    }
    this.service.getVuelos();
    this.subscription = this.service.observableVuelos.subscribe(item => {
      this.infoVuelos = item;
    });
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  exporta(){
    this.serviceexcel.exportAsExcelFile(this.infoVuelos, "Vuelos")
    
  };

  limpiarCampos() {
    this.vuelo = undefined;
    this.destino = undefined;
    this.embarque = undefined;
    this.puerta = undefined;
    this.salida = undefined;
  }
} 

