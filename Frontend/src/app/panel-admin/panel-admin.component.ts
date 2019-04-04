import { ActivatedRoute, Router } from "@angular/router";
import { InfoVueloService } from "./../info-vuelo.service";
import { infoVuelo } from "./../infoVuelos";
import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ExcelService } from "./../excel.service"
import * as $ from 'jquery';
import { usuario } from '../usuario';



@Component({
  selector: "app-panel-admin",
  templateUrl: "./panel-admin.component.html",
  styleUrls: ["./panel-admin.component.css"]
})
export class PanelAdminComponent implements OnInit {
  constructor(
    private service: InfoVueloService,
    private route: ActivatedRoute,
    private router: Router,
    private serviceexcel: ExcelService 
  ) {}
  miUsuario = new usuario;
  infoVuelos: Array<infoVuelo>;
  infoVuelosExportar: Array<infoVuelo>;
  infoVuelosFichero: Array<infoVuelo>;
  listado: any[];

  private subscription: Subscription;
  vuelo: string;
  destino: string;
  embarque: string;
  puerta: string;
  salida: string;
  currentPage: number = 1;
  
  nuevoVuelo() {
    this.router.navigateByUrl("/admin/nuevo");
  }

  nuevoUsuario() {
    this.router.navigateByUrl("/admin/nuevousuario");
  }

  exporta(){
    this.convierte();
    
    this.infoVuelosExportar = this.listado["Vuelos"]; 
    
           
    this.serviceexcel.exportAsExcelFile(this.infoVuelosExportar, "Vuelos")
    
  };

  convierte() {
    var filas = [];
    var headersText = [];
    var $headers = $("th");
    var $celdas;
          
    var $rows = $("tbody tr").each(function(index) {
      $celdas = $(this).find("td b");
      filas[index] = {};
    
      $celdas.each(function(cellIndex) {
        if(headersText[cellIndex] === undefined) {
          headersText[cellIndex] = $($headers[cellIndex]).text();
        }
  
        filas[index][headersText[cellIndex]] = $(this).text();
      });    
    });
    
    var myObj = {
         "Vuelos" : filas
    };
   
    this.listado = JSON.parse(JSON.stringify(myObj));
    
    
  };

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl("/login");
  }
  ngOnInit() {
    if (localStorage.getItem("role") != "ROLE_ADMIN") {
      this.router.navigateByUrl("/login");
    }
    this.service.getVuelos();
    this.subscription = this.service.observableVuelos.subscribe(item => {
      this.infoVuelos = item;
    });
  }

  onSelectFile(event) {
    
    if (event.target.files && event.target.files[0]) {
      let filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        let reader = new FileReader();
       // reader.readAsText(event.srcElement.files[0], "UTF-8");

        reader.onload = (event: any) => {
        this.infoVuelosFichero = JSON.parse(atob(event.target.result.replace('data:application/json;base64,', '')));

        // alert(JSON.stringify(JSON.parse(atob(event.target.result.replace('data:application/json;base64,', '')))));
        // this.vuelos = JSON.parse(event.target.result);
         
        };

        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

  limpiarCampos() {
    this.vuelo = undefined;
    this.destino = undefined;
    this.embarque = undefined;
    this.puerta = undefined;
    this.salida = undefined;
  }

  nuevosVuelos() {
    this.service.restPostVuelos(this.infoVuelosFichero);
    setTimeout(() => {this.router.navigateByUrl('/admin');}, 1500);
  }

}
