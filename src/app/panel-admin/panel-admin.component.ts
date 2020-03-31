import { ActivatedRoute, Router } from "@angular/router";
import { InfoRopaService } from "./../info-ropa.service";
import { infoRopa } from "./../infoRopas";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ExcelService } from "./../excel.service";
import * as $ from "jquery";
import { usuario } from "../usuario";

@Component({
  selector: "app-panel-admin",
  templateUrl: "./panel-admin.component.html",
  styleUrls: ["./panel-admin.component.css"]
})
export class PanelAdminComponent implements OnInit {
  constructor(
    private service: InfoRopaService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceexcel: ExcelService
  ) {}
  miUsuario = new usuario();
  infoRopas: Array<infoRopa>;
  infoRopasExportar: Array<infoRopa>;
  infoRopasFichero: Array<infoRopa>;
  listado: any[];

  private subscription: Subscription;

  ropa: string;
  marca: string;
  talla: string;
  color: string;
  precio: string;
  genero: string;
  origen: string;
  currentPage: number = 1;

  nuevaRopa() {
    this.router.navigateByUrl("/admin/nuevo");
  }

  nuevoUsuario() {
    this.router.navigateByUrl("/admin/nuevousuario");
  }

  exporta() {
    this.convierte();

    this.infoRopasExportar = this.listado["Ropas"];

    this.serviceexcel.exportAsExcelFile(this.infoRopasExportar, "Ropas");
  }

  convierte() {
    var filas = [];
    var headersText = [];
    var $headers = $("th");
    var $celdas;

    var $rows = $("tbody tr").each(function(index) {
      $celdas = $(this).find("td b");
      filas[index] = {};

      $celdas.each(function(cellIndex) {
        if (headersText[cellIndex] === undefined) {
          headersText[cellIndex] = $($headers[cellIndex]).text();
        }

        filas[index][headersText[cellIndex]] = $(this).text();
      });
    });

    var myObj = {
      Ropas: filas
    };

    this.listado = JSON.parse(JSON.stringify(myObj));
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  ngOnInit() {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      this.router.navigateByUrl("/login");
    }
    this.service.getRopas();
    this.subscription = this.service.observableRopas.subscribe(item => {
      this.infoRopas = item;
    });
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      let filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let reader = new FileReader();
        // reader.readAsText(event.srcElement.files[0], "UTF-8");

        reader.onload = (event: any) => {
          this.infoRopasFichero = JSON.parse(
            atob(
              event.target.result.replace("data:application/json;base64,", "")
            )
          );

          // alert(JSON.stringify(JSON.parse(atob(event.target.result.replace('data:application/json;base64,', '')))));
          // this.vuelos = JSON.parse(event.target.result);
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
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

  nuevasRopas() {
    this.service.restPostRopas(this.infoRopasFichero);
    setTimeout(() => {
      this.router.navigateByUrl("/admin");
    }, 1500);
  }
}
